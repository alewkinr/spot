import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Button, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Main = () => {
  const navigation = useNavigation();

  return (<SafeAreaView style={styles.container}>
    <Text style={styles.text}>Main</Text>
    <Button title="Press to Back"
      onPress={() => navigation.goBack()}
    />
  </SafeAreaView>);
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    minHeight: Math.round(Dimensions.get("window").height),
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#efefef',
    flex: 1,
    paddingTop: 40,
    minHeight: Math.round(Dimensions.get('window').height),
  },
  text: {
    color: "black",
  },
});


export { Main };
