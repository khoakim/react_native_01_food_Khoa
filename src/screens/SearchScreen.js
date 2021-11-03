import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import useResults from "../hooks/useResults";

const SearchScreen = ({ navigation }) => {
  const [search, setSearch] = useState("sushi");
  const [results, fetchData] = useResults("sushi");

  return (
    <View>
      <View style={styles.container}>
        <Feather name="search" style={styles.searchIcon} color="black" />
        <TextInput
          style={styles.searchBox}
          value={search}
          onChangeText={setSearch}
          autoCapitalize="none"
        />
        <Button title="Test" onPress={() => fetchData(search)} />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { id: item.id })}
          >
            <View>
              <Text>{item.name}</Text>
              {item.image_url ? (
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: item.image_url,
                  }}
                />
              ) : (
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 48,
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
  },
  container2: {
    fontSize: 48,
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
  },
  searchIcon: {
    fontSize: 24,
  },
  searchBox: {
    fontSize: 20,
    borderColor: "red",
    borderWidth: 2,
    flex: 1,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
});

export default SearchScreen;
