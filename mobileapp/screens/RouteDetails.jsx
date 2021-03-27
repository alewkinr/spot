import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {BackButton} from "../components/BackButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginHorizontal: 'auto',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const RouteDetails = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>RouteDetails</Text>
          <BackButton/>
  </View>);
}

export { RouteDetails };
