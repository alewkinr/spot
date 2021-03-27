import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Auth = () => {
  const navigation = useNavigation();

  return (<View style={styles.container}>
    <Text style={styles.text}>Auth</Text>
    <Button title="Press" 
      onPress={() => navigation.navigate('Main')}
    />
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginHorizontal: 'auto',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});

export { Auth };
