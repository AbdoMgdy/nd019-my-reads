import * as React from "react";
import { StyleSheet } from "react-native";
import AddCard from "../components/AddCard";

import { Text, View } from "../components/Themed";

export default () => {
  return (
    <View style={styles.container}>
      <AddCard />
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
