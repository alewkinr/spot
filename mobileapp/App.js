import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Auth } from './screens/Auth';
import { Main } from './screens/Main';
import { RouteDetails } from "./screens/RouteDetails";

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Auth" component={Auth} />
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="RouteDetails" component={RouteDetails}  drawerLabel={() => null}/>
    </Drawer.Navigator>
  );
}

export default function App() {
    const isLoadingComplete = useCachedResources();


    if (!isLoadingComplete) {
        return <AppLoading/>;
    } else {
        return (
            <NavigationContainer>
                <AppDrawer/>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
