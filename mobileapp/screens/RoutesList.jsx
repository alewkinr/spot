import React from "react";
import { View, StyleSheet } from "react-native";
import { List } from "@ui-kitten/components";
import { Dimensions } from "react-native";
import { RouteCard } from "../components/RouteCard"


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        marginHorizontal: "auto",
        width: "100%",
    },
    item: {
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    list: {
        marginTop: 50,
        maxHeight: Dimensions.get("window").height
    }
});
const RoutesList = ( { navigation }) => {
// todo: fill with data from backend
    const data = new Array(8).fill({
        navigation: navigation,
        title: "Item",
        id: 123,

    });

  return (
      <View style={styles.container}>
          <List
              style={styles.list}
              contentContainerStyle={styles.item}
              data={data}
              renderItem={RouteCard}
          />
      </View>
  )}

export { RoutesList };
