import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default getYelpPhotos = id => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching   ", id);
      yelp
        .get(`/${id}`)
        .then(response => {
          setPhotos(response.data.photos);
        })
        .catch(error => console.log("error   ", error));
    };

    fetchData();
  }, []);
  return [photos];
};
