import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { Auth } from './screens/Auth';
import { Main } from './screens/Main';
import useCachedResources from "./hooks/useCacheResources";
import AppLoading from "expo-app-loading";
import { RouteDetails } from "./screens/RouteDetails";
import Colors from "./constants/Colors";
import {FeedScreen} from "./screens/FeedSceen";

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Auth" component={Auth} />
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="RouteDetails" component={RouteDetails}  drawerLabel={() => null}/>
      <Drawer.Screen name="FeedScreen" component={FeedScreen}/>
    </Drawer.Navigator>
  );
}

export default function App() {
    const isLoadingComplete = useCachedResources();

    if (isLoadingComplete) {
        return (
            <>
            <StatusBar backgroundColor={Colors.light.background} />
            <NavigationContainer>
                <AppDrawer/>
            </NavigationContainer>
            </>
        );
    }

    if (!isLoadingComplete) {
        return <AppLoading/>;
    }
}
