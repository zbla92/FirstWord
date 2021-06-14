import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../utils/constants";
import Button from "../components/Button";

const Home = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Select Category"
        action={() => navigation.navigate("CategorySelection")}
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

export default Home;
