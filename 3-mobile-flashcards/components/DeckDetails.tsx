import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Button, View, StyleSheet } from "react-native";
import { DeckType } from "../types";
import { getDeck, removeDeck } from "../utils/api";
import Deck from "./Deck";

export default () => {
  const navigation = useNavigation();
  const route: any = useRoute();
  const id = route.params.id;
  const handleDeleteDeck = () => {
    removeDeck(id).then(() => navigation.navigate("Decks"));
  };
  const [deck, setDeck] = useState({ title: "", questions: [] });
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDeck(id).then((data) => setDeck(data));
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Deck {...deck} />
      <View>
        <View style={styles.button}>
          <Button
            title="Add Card"
            onPress={() => navigation.navigate("AddCard", { id })}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Quiz"
            onPress={() => navigation.navigate("Quiz", { id })}
          />
        </View>
      </View>
      <Button title="Delete Deck" onPress={() => handleDeleteDeck()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: "#ccc",
  },
  button: {
    margin: 15,
  },
});
