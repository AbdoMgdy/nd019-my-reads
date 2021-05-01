import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";
import { addCardToDeck } from "../utils/api";

export default () => {
  const navigation = useNavigation();
  const route: any = useRoute();
  const id = route.params.id;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const handleSubmit = () => {
    addCardToDeck(id, { question, answer }).then(() => {
      navigation.navigate("DeckDetails", id);
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.block}>
          <Text style={styles.title}>Add a question</Text>
        </View>
        <View style={[styles.block]}>
          <TextInput
            style={styles.input}
            value={question}
            onChangeText={(text) => setQuestion(text)}
            placeholder="Question"
            autoFocus={true}
            returnKeyType="next"
            blurOnSubmit={false}
          />
        </View>
        <View style={[styles.block]}>
          <TextInput
            style={styles.input}
            value={answer}
            onChangeText={(text) => setAnswer(text)}
            placeholder="Answer"
            returnKeyType="done"
          />
        </View>
        <Button title="Submit" onPress={() => handleSubmit()} />
      </View>
      <View style={{ height: "30%" }} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
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
  title: {
    textAlign: "center",
    fontSize: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 20,
    height: 40,
  },
});
