import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import IndividualSearch from "../components/IndividualSearch";

const SearchList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.restaurant.id}
        renderItem={({ item }) => {
          return <IndividualSearch result={item} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default SearchList;
