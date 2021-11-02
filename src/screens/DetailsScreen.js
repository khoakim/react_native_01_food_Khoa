import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
const DetailsScreen = ({ navigation }) => {
    const [photos,setPhotos]=useState([])
    const id = navigation.getParam('id');
    // const { id } = route.params;
    // console.log(id);
    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching   ",id);
            yelp.get(`/${id}`).then( (response) => {
            setPhotos(response.data.photos);
            }).catch(error=>console.log("error   ",error));}

        fetchData();
      }, []);
    return (
        <View>
            <Text style={styles.container}>DetailsScreen</Text>
            <FlatList
                    
                    data={photos}
                    renderItem={({ item }) => 

                        <View>
                                                        <Image
                            style={styles.tinyLogo}
                            source={{
                            uri: item,
                            }}/>

                        
                        </View>


                      }
                    keyExtractor={item => item}
                />
        </View>
    )
};

const styles=StyleSheet.create({
    container : {
        fontSize : 48
    },
    tinyLogo: {
        width: 200,
        height: 200,
      },
});

export default DetailsScreen