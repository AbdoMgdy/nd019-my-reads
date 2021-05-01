import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { DeckListType, DeckType } from "../types";
import Deck from "./Deck";

interface IDeckListProps {
  decks: DeckListType;
}

export default ({ decks }: IDeckListProps) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mobile Flashcards</Text>
      {Object.entries(decks).map(([id, deck]) => {
        return (
          <TouchableOpacity
            key={deck.title}
            onPress={() => navigation.navigate("DeckDetails", { id })}
          >
            <Deck {...deck} />
          </TouchableOpacity>
        );
      })}
      <View style={{ marginBottom: 30 }} />
    </ScrollView>
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
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 16,
    color: "green",
  },
});
