import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [search,setSearch] = useState("");
    return (
        <View style={styles.container}>
            <Feather name="search" style={styles.searchIcon} color="black" />
            <TextInput 
                style={styles.searchBox} 
                value={search} 
                onChangeText={setSearch}
                autoCapitalize='none'
            />
            <Button title="Test" onPress={()=>{
                yelp.get('/search',{
                    params : {
                        location: 'Canberra',
                        term: search
                    }
                }).then( response => console.log(response))
            }}/>
        </View>
    )
};

const styles=StyleSheet.create({
    container : {
        fontSize : 48,
        flexDirection : 'row',
        marginHorizontal : 10,
        alignItems:'center'

    },
    searchIcon : {
        fontSize : 24,
    },
    searchBox : {
        fontSize : 20,
        borderColor : 'red',
        borderWidth : 2,
        flex:1
    }
});

export default SearchScreen