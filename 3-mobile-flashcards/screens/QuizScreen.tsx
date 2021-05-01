import * as React from "react";
import { StyleSheet } from "react-native";
import Quiz from "../components/Quiz";

import { View } from "../components/Themed";

export default () => {
  return (
    <View style={styles.container}>
      <Quiz />
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
