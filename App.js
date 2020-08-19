import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/screens/HomeScreen";
import LiveScreen from "./components/screens/LiveScreen";
import ProfileScreen from "./components/screens/ProfileScreen";

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const TabNavScreen = () => {
  return (
    <TabNav.Navigator>
      <TabNav.Screen name="HomeScreen" component={HomeScreen} />
      <TabNav.Screen name="LiveScreen" component={LiveScreen} />
      <TabNav.Screen name="ProfileScreen" component={ProfileScreen} />
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


