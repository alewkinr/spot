import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Auth } from './screens/Auth';
import { Main } from './screens/Main';

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Auth" component={Auth} />
      <Drawer.Screen name="Main" component={Main} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#97BA1E" />
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
