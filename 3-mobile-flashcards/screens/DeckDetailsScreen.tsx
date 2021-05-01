import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import DeckDetails from "../components/DeckDetails";
import DeckList from "../components/DeckList";

import { Text, View } from "../components/Themed";
import { DeckListType } from "../types";
import { getData, getDecks } from "../utils/api";

export default () => {
  return (
    <View style={styles.container}>
      <DeckDetails />
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
