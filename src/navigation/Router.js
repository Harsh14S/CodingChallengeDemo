import React, {useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Colors from '../assets/Colors';
import HomeScreen from '../screens/Home/HomeScreen';
import Profile from '../screens/Profile/ProfileScreen';
import {Context} from '../../global/ContextProvider';
import SignUpScreen from '../screens/LoginSignup/SignUpScreen';
import LoginScreen from '../screens/LoginSignup/LoginScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import ShowItemScreen from '../screens/ShowItem/ShowItemScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

export default Router = () => {
  const {isUserLoggedIn, splashComplete} = useContext(Context);

  if (splashComplete) {
    if (isUserLoggedIn) {
      return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {backgroundColor: Colors.White},
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="ShowItem" component={ShowItemScreen} />
        </Stack.Navigator>
      );
    } else {
      return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {backgroundColor: Colors.White},
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      );
    }
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: Colors.White},
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    );
  }
};
