import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import useResults from "../hooks/useMoreResults";
const DetailsScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [photos] = useResults(id);

  return (
    <View>
      <Text style={styles.container}>DetailsScreen</Text>
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <View>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: item,
              }}
            />
          </View>
        )}
        keyExtractor={item => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 48,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
});

export default DetailsScreen;
