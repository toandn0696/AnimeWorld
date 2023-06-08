import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './TypeNavigtion';
import {appStackRoutes} from './route/StackRoute';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {appBottomRoutes} from './route/BottomTabRoute';

const AppStack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <AppStack.Navigator
      initialRouteName="Splash"
      screenOptions={() => ({
        headerShown: false,
      })}>
      {appStackRoutes.map(stackRoute => (
        <AppStack.Screen key={stackRoute.name} {...stackRoute} />
      ))}
    </AppStack.Navigator>
  );
}

export function AppBottomTabNavigation() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
      })}>
      {appBottomRoutes.map(bottomRoute => (
        <BottomTab.Screen key={bottomRoute.name} {...bottomRoute} />
      ))}
    </BottomTab.Navigator>
  );
}
