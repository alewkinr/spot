import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Header = ({ children }) => {
  const radius = 20;

  const styles = StyleSheet.create({
    container: {
      minHeight: 70,
      width: '100%',
      borderBottomLeftRadius: radius, 
      borderBottomRightRadius: radius,
      backgroundColor: '#FFF',
    }
  });

  return <View style={styles.container}>{children}</View>;
}
