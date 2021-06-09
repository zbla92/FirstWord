import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../utils/constants";
import Button from "../components/Button";

const LanguageSelection = ({ navigation }) => {
  const handleAction = (category) => {
    navigation.navigate("PlaybackView", { category });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Basic"
        theme="secondary"
        additionalStyle={styles.button}
        action={() => handleAction("basic")}
      />
      <Button
        title="Food"
        theme="secondary"
        additionalStyle={styles.button}
        action={() => handleAction("food")}
      />
      <Button
        title="Colors"
        theme="secondary"
        additionalStyle={styles.button}
        action={() => handleAction("colors")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DARK.background,
    alignItems: "center",
    justifyContent: "center",
    color: "red",
  },
  button: {
    margin: 8,
  },
});

export default LanguageSelection;
