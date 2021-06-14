import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import WordButton from "../components/WordButton";

import { COLORS } from "../utils/constants";
import data from "../data/categorySounds";

const PlaybackView = ({ route, navigation }) => {
  const [soundPlaying, setSoundPlaying] = useState(false);

  const { category } = route.params;

  const handleSetSoundPlaying = (id) => {
    setSoundPlaying(id);
    setTimeout(() => {
      setSoundPlaying(null);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={data[category]}
        renderItem={(item) => (
          <WordButton
            item={item}
            soundPlaying={soundPlaying}
            handleSetSoundPlaying={handleSetSoundPlaying}
          />
        )}
        numColumns={2}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DARK.background,
  },
  list: {
    justifyContent: "center",
    flexDirection: "column",
    // flexWrap: "wrap",
  },
});

export default PlaybackView;
