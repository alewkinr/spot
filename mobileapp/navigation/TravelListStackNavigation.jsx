import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Travel } from "../screens/Travel";

const Stack = createStackNavigator();

export const TravelListStackNavigation = () => {
  return (
    <Stack.Navigator headerShown={false} headerMode="none">
      <Stack.Screen name="TravelScreen" component={Travel} />
    </Stack.Navigator>
  )
}
