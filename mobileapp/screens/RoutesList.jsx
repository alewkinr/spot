import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { List } from "@ui-kitten/components";
import { Dimensions } from "react-native";
import { RouteCard } from "../components/RouteCard/RouteCard"


const RoutesList = ( { navigation }) => {
    // todo: fill with data from backend
    const data = new Array(1).fill({
        navigation: navigation,
        title: "Путешествие в Азию",
        type: "самостоятельный маршрут",
        icon: "⛩",
        id: 123,
        cost: 100000,
        from: new Date(),
        to: new Date(),
        destinations: [
            {
                country: "Южная Корея",
                cities: ["Сеул", "Тэгу"],
            },
            {
                country: "Япония",
                cities: ["Осака", "Токио", "Нагоя"],
            },
            {
                country: "Китай",
                cities: ["Пекин", "Шанхай"],
            }
        ],
        author_id: 123,
        companions: [456, 789]
    });

  return (
      <SafeAreaView style={styles.container}>
          <List horizontal={false}
              style={styles.list}
              contentContainerStyle={styles.item}
              data={data}
              renderItem={RouteCard}
          />
      </SafeAreaView>
  )}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        marginHorizontal: "auto",
        minHeight: Math.round(Dimensions.get("window").height),
    },
    item: {
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    list: {
        maxHeight: Dimensions.get("window").height
    }
});
export { RoutesList };
