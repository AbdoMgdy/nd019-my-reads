import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { DeckType } from "../types";
import {
  clearLocalNotification,
  getDeck,
  setLocalNotification,
} from "../utils/api";

export default () => {
  const navigation = useNavigation();
  const route: any = useRoute();
  const id = route.params.id;
  const [screen, setScreen] = useState("quiz");
  const [show, setshow] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [current, setCurrent] = useState(0);

  const handleReset = () => {
    setAnswered(0);
    setScore(0);
    setScreen("quiz");
    setshow(false);
    setCurrent(0);
  };
  const handleAnswer = (answer: string) => {
    setAnswered(answered + 1);
    setshow(false);
    let temp = answered + 1;
    if (answer === "right") {
      setScore(score + 1);
    }
    if (temp === questions.length) {
      setScreen("result");
    }
    if (temp < questions.length) {
      setCurrent(current + 1);
    }
  };
  const [questions, setQuestions] = useState([{ question: "", answer: "" }]);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDeck(id).then((data: DeckType) => {
        setQuestions(data.questions);
        handleReset();
      });
    });
    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    clearLocalNotification().then(() => setLocalNotification());
  }, []);
  return (
    <>
      {questions.length === 0 && (
        <View style={styles.pageStyle}>
          <View style={styles.block}>
            <Text style={[styles.count, { textAlign: "center" }]}>
              Sorry, No cards in Deck !
            </Text>
          </View>
        </View>
      )}
      {screen === "result" && (
        <View style={styles.pageStyle}>
          <View style={styles.block}>
            <Text style={[styles.count, { textAlign: "center" }]}>
              Quiz Complete!
            </Text>
          </View>
          <View style={styles.block}>
            <Text style={[styles.count, { textAlign: "center" }]}>Score</Text>
            <Text>
              {score} out of {questions.length}
            </Text>
          </View>
          <View>
            <View style={styles.button}>
              <Button title="Reset" onPress={() => handleReset()} />
            </View>
            <View style={styles.button}>
              <Button
                title="Back to Deck"
                onPress={() => {
                  handleReset();
                  navigation.goBack();
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Home"
                onPress={() => {
                  navigation.navigate("Decks");
                }}
              />
            </View>
          </View>
        </View>
      )}
      {screen === "quiz" && (
        <View style={styles.container}>
          <View style={styles.pageStyle}>
            <View style={[styles.block, styles.questionContainer]}>
              <Text style={styles.questionText}>
                Question {current + 1} / {questions.length}
              </Text>
              <View style={styles.questionWrapper}>
                <Text style={styles.title}>{questions[current].question}</Text>
                {show && (
                  <View>
                    <Text>{questions[current].answer}</Text>
                  </View>
                )}
              </View>
            </View>

            <View style={styles.button}>
              <Button title="Show Answer" onPress={() => setshow(true)} />
            </View>
            <View>
              <View style={styles.button}>
                <Button
                  title="Right"
                  color="green"
                  onPress={() => handleAnswer("right")}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Wrong"
                  color="red"
                  onPress={() => handleAnswer("wrong")}
                />
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageStyle: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: "#ccc",
    justifyContent: "space-around",
  },
  block: {
    marginBottom: 20,
  },
  button: {
    margin: 16,
  },
  count: {
    fontSize: 24,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
  questionContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 16,
    flexGrow: 1,
  },
  questionWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  questionText: {
    textDecorationLine: "underline",
    textAlign: "center",
    fontSize: 20,
  },
  resultTextGood: {
    color: "green",
    fontSize: 46,
    textAlign: "center",
  },
  resultTextBad: {
    color: "red",
    fontSize: 46,
    textAlign: "center",
  },
});
