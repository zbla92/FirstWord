import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";

import { sounds } from "../utils/sounds";

const WordButton = ({ item, soundPlaying, handleSetSoundPlaying }) => {
  const [sound, setSound] = useState();

  // Sound shit
  async function playSound(src, id) {
    const { sound } = await Audio.Sound.createAsync(src);

    setSound(sound);
    handleSetSoundPlaying(id);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

  return (
    <TouchableOpacity
      style={[
        style.container,
        soundPlaying === item.item.id && style.active,
        { backgroundColor: item?.item?.color },
      ]}
      onPress={() => {
        if (!soundPlaying) playSound(item?.item?.audio, item.item.id);
      }}
      disabled={soundPlaying}
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
    height: 144,
    margin: 5,
    overflow: "hidden",
    borderRadius: 5,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
  active: {
    borderColor: "orange",
    borderWidth: 2,
  },
});

export default WordButton;
