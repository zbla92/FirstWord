import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { COLORS } from "../utils/constants";

const Home = ({ route, navigation }) => {
  console.log("We Home baby", route.params);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="TestView"
        onPress={() => navigation.navigate("TestView")}
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
