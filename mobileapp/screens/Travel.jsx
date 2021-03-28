import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import { Header } from '../components/Header';

export const Travel = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Text style={{ textAlign: 'center', marginTop: 30, fontSize: 15, }}>Pop Some Tags</Text>
      </Header>

      <ScrollView style={styles.containerScrollView}>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efefef",
    flex: 1,
    minHeight: Math.round(Dimensions.get("window").height),
    paddingTop: 40,
  },
  containerScrollView: {
    backgroundColor: "#efefef",
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
  }
});
