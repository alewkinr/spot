import React from "react";
import { Text, View, StyleSheet, Button, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Text style={styles.text}>Main</Text>
        <Button title="Press to Back"
          onPress={() => navigation.goBack()}
        />
      </View>
  )}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    minHeight: Math.round(Dimensions.get("window").height),
    paddingTop: 40,
  },
  text: {
    color: "black",
  },
});


export { Main };
