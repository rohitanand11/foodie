import { useState, useEffect } from "react";
import zomato from "../api/zomato";

export default () => {
  const [results, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await zomato.get("/search", {
        params: {
          q: searchTerm,
        },
      });

      setResult(response.data.restaurants);
    } catch (e) {
      setErrorMessage("something went wrong");
    }
  };

  //to run this code only one time
  useEffect(() => {
    searchApi("bangalore");
  }, []);

  return [searchApi, results, errorMessage];
};
