import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import DeckList from "../components/DeckList";

import { View } from "../components/Themed";
import { DeckListType } from "../types";
import { getData, getDecks } from "../utils/api";

export default () => {
  const navigation = useNavigation();
  const initialDecks: DeckListType = getData();
  const [decks, setDecks] = useState(initialDecks);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDecks().then((data) => {
        setDecks(data);
      });
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <DeckList decks={decks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
