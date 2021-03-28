import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { Auth } from "./screens/Auth";
import { Main } from "./screens/Main";
import useCachedResources from "./hooks/useCacheResources";
import AppLoading from "expo-app-loading";
import { RoutesListStackNavigation } from "./navigation/RoutesListStackNavigation";
import { TravelListStackNavigation } from "./navigation/TravelListStackNavigation";
import { FeedScreen } from "./screens/FeedSceen";
import * as eva from "@eva-design/eva";
import Colors from "./constants/Colors";
import { ApplicationProvider } from "@ui-kitten/components";
import {MainScreen} from "./screens/MainScreen";

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MainScreen"  component={MainScreen} options={{title: "Главный экран"}}/>
      <Drawer.Screen name="FeedScreen" component={FeedScreen}/>
      <Drawer.Screen name="Main" component={Main}/>
      <Drawer.Screen name="RoutesListStackNavigation" component={RoutesListStackNavigation}/>
      <Drawer.Screen name="TravelListStackNavigation" component={TravelListStackNavigation}/>
    </Drawer.Navigator>
  );
}

export default function App() {
    const isLoadingComplete = useCachedResources();

    if (isLoadingComplete) {
        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <StatusBar backgroundColor={Colors.light.background}/>
                <NavigationContainer>
                    <AppDrawer/>
                </NavigationContainer>
            </ApplicationProvider>
        );
    }

    if (!isLoadingComplete) {
        return <AppLoading/>;
    }
}
