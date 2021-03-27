import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { Auth } from "./screens/Auth";
import { Main } from "./screens/Main";
import useCachedResources from "./hooks/useCacheResources";
import AppLoading from "expo-app-loading";
import { RoutesListStackNavigation } from "./navigation/RoutesListStackNavigation";
import { FeedScreen } from "./screens/FeedSceen";
import * as eva from "@eva-design/eva";
import Colors from "./constants/Colors";
import { ApplicationProvider } from "@ui-kitten/components";

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Auth" component={Auth} />
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="FeedScreen" component={FeedScreen}/>
      <Drawer.Screen name="RoutesListStackNavigation" component={RoutesListStackNavigation}/>
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
