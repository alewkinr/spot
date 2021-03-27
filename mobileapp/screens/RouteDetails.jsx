import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BackButton } from "../components/BackButton";
import { RoutesFeed } from "../components/RoutesFeed"

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 'auto',
    width: '100%',
  }
});

const RouteDetails = () => {
  return (
      <View style={styles.container}>
          <BackButton/>
          <RoutesFeed/>
      </View>
  )}

export { RouteDetails };
