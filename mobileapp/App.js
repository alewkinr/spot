import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Auth} from './screens/Auth';
import {Main} from './screens/Main';
import useCachedResources from "./hooks/useCacheResources";
import AppLoading from "expo-app-loading";
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

    if (isLoadingComplete) {
        return (
            <NavigationContainer>
                <AppDrawer/>
            </NavigationContainer>
        );
    }

    if (!isLoadingComplete) {
        return <AppLoading/>;
    }
}
