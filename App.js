import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/screens/HomeScreen";

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const TabNavScreen = () => {
  return (
    <TabNav.Navigator>
      <TabNav.Screen name="HomeScreen" component={HomeScreen} />
    </TabNav.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="App" component={TabNavScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}


