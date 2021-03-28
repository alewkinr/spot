import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CircledText = ({ children, circleRadius = 45, }) => {
  const styles = StyleSheet.create({
    circle: {
      backgroundColor: "white",
      borderRadius: 1000,
      height: circleRadius,
      marginRight: 10,
      width: circleRadius,
    },
    circleText: {
      fontSize: 20,
      marginTop: circleRadius / 4,
      textAlign: "center",
    },
  });

  return (
      <View style={styles.circle}>
  <Text style={styles.circleText}>{children}</Text>
</View>);
}

