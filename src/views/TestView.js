import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
import { COLORS } from "../utils/constants";

const TestView = ({ navigation }) => {
  console.log("shiet madafaksa");
  return (
    <View style={styles.container}>
      <Text>TestView</Text>
      <Button
        title="Home"
        action={() => navigation.navigate("Home", { sex: "na ex" })}
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
});

export default TestView;
