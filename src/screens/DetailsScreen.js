import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = () => {
    return (
        <View>
            <Text style={styles.container}>DetailsScreen</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    container : {
        fontSize : 48
    }
});

export default DetailsScreen