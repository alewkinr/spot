import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Auth} from './screens/Auth';
import {Main} from './screens/Main';
import useCachedResources from "./hooks/useCacheResources";
import AppLoading from "expo-app-loading";



const Drawer = createDrawerNavigator();

function AppDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Auth" component={Auth}/>
            <Drawer.Screen name="Main" component={Main}/>
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
