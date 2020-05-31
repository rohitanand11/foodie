import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const searchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.BackgroundStyling}>
      <FontAwesome name="search" style={styles.iconStyling} />
      <TextInput
        style={styles.inputStyles}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        placeholderTextColor="rgb(100,100,100)"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  BackgroundStyling: {
    height: 50,
    backgroundColor: "rgb(211,211,211)",
    borderRadius: 7,
    marginHorizontal: 10,
    flexDirection: "row",
    marginTop: 5,
  },

  iconStyling: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  inputStyles: {
    fontSize: 21,
    flex: 1,
    marginHorizontal: 5,
    //textAlign:'center'
  },
});

export default searchBar;
