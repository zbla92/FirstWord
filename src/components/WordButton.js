import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";

import { sounds } from "../utils/sounds";

const WordButton = ({ item }) => {
  const [sound, setSound] = React.useState();
  console.log(item.item);
  console.log("wazaa");

  // Sound shit
  async function playSound(src) {
    const { sound } = await Audio.Sound.createAsync(src);
    setSound(sound);

    await sound.playAsync();
  }
  // Sound shit

  const handlePress = (src) => playSound(src);

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => {
        console.log(item);
        handlePress(sounds.basic[item.item.src]);
      }}
    >
      <Image
        style={style.image}
        source={{
          uri: item.item?.img,
        }}
      />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: 125,
    height: 125,
    margin: 5,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
});

export default WordButton;
