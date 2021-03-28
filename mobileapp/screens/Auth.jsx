import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Text } from "../components/Themed"
import { useNavigation } from "@react-navigation/native";

const Auth = () => {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Text>Auth</Text>
        <Button title="Press"
                onPress={() => navigation.navigate("Main")}
        />
        <Button title="RoutesListStackNavigation"
                onPress={() => navigation.navigate("RoutesListStackNavigation")}
        />
        <Button title="TravelListStackNavigation"
                onPress={() => navigation.navigate("TravelListStackNavigation")}
        />
        <Button title="FeedScreen"
                  onPress={() => navigation.navigate("FeedScreen")}
        />
  </View>);
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    marginHorizontal: "auto",
    width: "100%",
  }
});

export { Auth };
