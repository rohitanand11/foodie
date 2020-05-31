import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import SearchList from "../components/SearchList";

const searchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultSByPrice = (lowerRange, upperRange) => {
    return results.filter((result) => {
      return (
        result.restaurant.average_cost_for_two >= lowerRange &&
        result.restaurant.average_cost_for_two < upperRange
      );
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <SearchList
          results={filterResultSByPrice(0, 230)}
          title="cost-effective resturant"
        />
        <SearchList
          results={filterResultSByPrice(230, 500)}
          title="budget-friendly resturant"
        />
        <SearchList
          results={filterResultSByPrice(500, 5000)}
          title="big-budget resturant"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default searchScreen;
