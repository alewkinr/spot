import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RoutesList } from "../screens/RoutesList";
import { Route } from "../screens/Route";

const Stack = createStackNavigator();

export const RoutesListStackNavigation = () => {
  return (
    <Stack.Navigator headerShown={false} headerMode="none">
      <Stack.Screen name="RoutesListScreen" component={RoutesList} />
      <Stack.Screen name="RouteScreen" component={Route} />
    </Stack.Navigator>
  )
}
