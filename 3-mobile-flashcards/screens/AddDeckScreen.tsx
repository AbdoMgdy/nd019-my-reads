import * as React from "react";
import { StyleSheet } from "react-native";
import AddDeck from "../components/AddDeck";

import { Text, View } from "../components/Themed";

export default () => {
  return (
    <View style={styles.container}>
      <AddDeck />
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
