import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

interface IButtonProps {
  children: any;
  onPress: TouchableOpacityProps["onPress"];
}

export default ({ children, onPress }: IButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
});
