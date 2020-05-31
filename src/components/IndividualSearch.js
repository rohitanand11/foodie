import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

const IndividualSearch = ({ result }) => {
  return (
    <View style={styles.container}>
      {result.restaurant.thumb === "" ? (
        <Image
          style={styles.image}
          source={require("../images/dummy_image.jpg")}
        />
      ) : (
        <Image style={styles.image} source={{ uri: result.restaurant.thumb }} />
      )}

      <Text style={styles.name}>{result.restaurant.name}</Text>
      <Text>
        {result.restaurant.user_rating.aggregate_rating} Stars |
        {result.restaurant.user_rating.votes} votes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default IndividualSearch;
