import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import WordButton from "../components/WordButton";

import { COLORS } from "../utils/constants";

const data = {
  basic: [
    {
      id: 2,
      src: "Krava",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg",
    },
    {
      id: 2,
      src: "Gica",
      img: "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/feed/feednavigator.com/news/r-d/how-can-the-prenatal-phase-influence-the-lifelong-performance-of-a-pig/8769254-1-eng-GB/How-can-the-prenatal-phase-influence-the-lifelong-performance-of-a-pig_wrbm_large.jpg",
    },
    {
      id: 3,
      src: "Cuko",
      img: "https://i.insider.com/5ef54cb61918242cfb4ec653?width=700",
    },
    {
      id: 4,
      src: "Ptica",
      img: "https://see.news/wp-content/uploads/2020/12/UK_wildbirds-01-robin.jpg",
    },
    {
      id: 5,
      src: "Auto",
      img: "https://www.chicagotribune.com/resizer/coI0JHa_AAGTW3lcMXxSYjsli10=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/53E7MBRVDZHVNBUZPDLOWAXQ3I.jpg",
    },
    {
      id: 6,
      src: "Bus",
      img: "https://www.sustainable-bus.com/wp-content/uploads/2019/12/scania-bus4.jpg",
    },
    {
      id: 7,
      src: "Kamion",
      img: "https://i0.wp.com/www.svijet-kamiona.com/wp-content/uploads/2020/02/eyJwYXRoIjoiXC9wdWJsaWNcL3VwbG9hZFwvc2NyZWVuc1wvMTg2MDhcLzI0MDQ4MzIxZGRiYTQzMjA1OGMzYmM2YzI2Nzk1ZDdkLTE1ODEzMjkxMTQuanBnIn0_man_jJntl2I5U5IsPRxqE2gzf2gWZYxQHNOYMa_d9qxoH1w.jpg?resize=1024%2C683",
    },
    {
      id: 8,
      src: "Oko",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Human_eye_with_blood_vessels.jpg",
    },
    {
      id: 9,
      src: "Voda",
      img: "https://hoganas.imagevault.media/publishedmedia/1gosmdbhm22ty0f6qi3q/shutterstock_658012429.jpg",
    },
    {
      id: 10,
      src: "Maca",
      img: "https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg",
    },
    {
      id: 10,
      src: "Maca",
      img: "https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg",
    },
  ],
};

const PlaybackView = ({ route, navigation }) => {
  const { category } = route.params;
  console.log(category);
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={data[category]}
        renderItem={(item) => <WordButton item={item} />}
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
