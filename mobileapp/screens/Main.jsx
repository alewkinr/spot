import React from "react";
import {  SafeAreaView,  StyleSheet, Button, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text } from "../components/Themed"

const Main = () => {
  const navigation = useNavigation();

  return (
      <SafeAreaView style={styles.container}>
        <Text>Main</Text>
          <Button title="Press to Back"
            onPress={() => navigation.goBack()}
          />
      </SafeAreaView>

  )}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#efefef",
    flex: 1,
    minHeight: Math.round(Dimensions.get("window").height),
    paddingTop: 40,
  },
});


export { Main };
