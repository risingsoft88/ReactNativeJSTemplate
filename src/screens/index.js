import 'react-native-gesture-handler';

import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import Splash from 'screens/Splash';
import OnBoarding from 'screens/OnBoarding';
import Login from 'screens/Login';
import SignupWith from 'screens/SignupWith';
import Signup from 'screens/Signup';
import ResetPwd from 'screens/ResetPwd';
import Terms from 'screens/Terms';

import Home from 'screens/Home';
import Post from 'screens/Post';
import Profile from 'screens/Profile';
import Settings from 'screens/Settings';

import Menu2 from 'screens/Menu2';

const RootStack = createStackNavigator();
const MainDrawer = createDrawerNavigator();
const MainTab = createBottomTabNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen name="Splash" component={Splash} />
      <RootStack.Screen name="OnBoarding" component={OnBoarding} />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="SignupWith" component={SignupWith} />
      <RootStack.Screen name="Signup" component={Signup} />
      <RootStack.Screen name="ResetPwd" component={ResetPwd} />
      <RootStack.Screen name="Terms" component={Terms} />
      <RootStack.Screen name="MainDrawer" component={MainDrawerNavigator} />
    </RootStack.Navigator>
  );
}

function MainDrawerNavigator() {
  return (
    <MainDrawer.Navigator initialRouteName="MainTab">
      <MainDrawer.Screen name="MainTab" component={MainTabNavigator} />
      <MainDrawer.Screen name="Menu2" component={Menu2} />
    </MainDrawer.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <MainTab.Navigator
      initialRouteName="Home"
      headerMode="none"
    >
      <MainTab.Screen name="Home" component={Home} />
      <MainTab.Screen name="Post" component={Post} />
      <MainTab.Screen name="Profile" component={Profile} />
      <MainTab.Screen name="Settings" component={Settings} />
    </MainTab.Navigator>
  );
}



export default class Screens extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    );
  }
}
