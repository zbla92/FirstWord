import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../utils/constants";

const Button = ({ theme, title, action }) => (
  <TouchableOpacity style={styles.button} onPress={action}>
    <Text style={styles.loginText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.GREEN.light,
    width: 100,
    paddingBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default Button;
