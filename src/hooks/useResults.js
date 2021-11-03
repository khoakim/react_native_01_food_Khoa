import { useState, useEffect } from "react";
import yelp from "../api/yelp";
export default useYelpApi = initialSearch => {
  const [results, setResults] = useState([]);
  const [query, setSearchQuery] = useState(initialSearch);
  useEffect(() => {
    const fetchData = async () => {
      yelp
        .get("/search", {
          params: {
            location: "Canberra",
            term: query,
          },
        })
        .then(response => {
          setResults(response.data.businesses);
        })
        .catch(error => console.log("error   ", error));
    };

    fetchData();
  }, [query]);
  return [results, setSearchQuery];
};
