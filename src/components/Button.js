import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../utils/constants";

const Button = ({ theme = "primary", title, action, additionalStyle }) => (
  <TouchableOpacity
    style={[styles.button, styles[theme], additionalStyle]}
    onPress={action}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: COLORS.LIGHT.text,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1,
    margin: 0,
    padding: 0,
  },
  primary: {
    backgroundColor: COLORS.GREEN.light,
  },
  secondary: { backgroundColor: COLORS.BLUE.light },
});

export default Button;
