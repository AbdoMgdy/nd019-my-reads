import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DeckType } from "../types";
export default ({ title, questions }: DeckType) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={styles.card}>{questions.length} cards</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexBasis: 120,
    minHeight: 120,
    borderWidth: 1,
    borderColor: "#aaa",
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
  },
  card: {
    fontSize: 18,
    color: "#ccc",
  },
});
