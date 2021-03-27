import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const CircledText = ({ children, circleRadius = 45, }) => {
  const styles = StyleSheet.create({
    circle: {
      marginRight: 10,
      backgroundColor: "white",
      borderRadius: 1000,
      width: circleRadius,
      height: circleRadius,
    },
    circleText: {
      marginTop: circleRadius / 4,
      fontSize: 20,
      textAlign: 'center',
    },
  });

  return (<View style={styles.circle}>
  <Text style={styles.circleText}>{children}</Text>
</View>);
}
