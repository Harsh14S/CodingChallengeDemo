import React, {useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Colors from '../assets/Colors';
import HomeScreen from '../screens/Home/HomeScreen';
import Profile from '../screens/Profile/Profile';
import {Context} from '../../global/ContextProvider';
import SignUpScreen from '../screens/LoginSignup/SignUpScreen';
import LoginScreen from '../screens/LoginSignup/LoginScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';

const Stack = createNativeStackNavigator();

export default Router = () => {
  const {isUserLoggedIn, setIsUserLoggedIn} = useContext(Context);

  useEffect(() => {
    const checkUserAuthentication = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        console.log('userData', userData);
        // Check if userData exists in AsyncStorage
        if (userData) {
          setIsUserLoggedIn(true);
        } else {
          setIsUserLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking user authentication:', error);
      }
    };

    checkUserAuthentication();
  }, []);

  if (isUserLoggedIn) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: Colors.White},
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: Colors.White},
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    );
  }
};
