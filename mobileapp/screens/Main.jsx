import React from 'react';
import { Text, View, StyleSheet, Button, useWindowDimensions, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();

  return (<View style={styles.container}>
    <Text style={styles.text}>Main</Text>
    <Button title="Press to Back" 
      onPress={() => navigation.goBack()}
    />
  </View>);
}

const styles = StyleSheet.create({
  container: {
    minHeight: Math.round(Dimensions.get('window').height),
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});


export { Main };
