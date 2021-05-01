import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";
import { saveDeckTitle } from "../utils/api";

export default () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => setTitle(""));
    return unsubscribe;
  }, [navigation]);
  const handleSubmit = () => {
    saveDeckTitle(title).then(() => navigation.navigate("Decks"));
  };
  return (
    <View style={styles.container}>
      <View style={{ height: 60 }} />
      <View style={styles.block}>
        <Text style={styles.title}>Deck Title:</Text>
      </View>
      <View style={[styles.block]}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
          placeholder="Deck Title"
          autoFocus={true}
          returnKeyType="done"
          onSubmitEditing={() => handleSubmit()}
        />
      </View>
      <Button title="Create Deck" onPress={() => handleSubmit()} />
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
    marginBottom: 20,
  },
});
