import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import * as Colors from '../assets/Colors';
import HomeScreen from '../screens/Home/HomeScreen';
import Profile from '../screens/Profile/Profile';

const Stack = createNativeStackNavigator();

export default Router = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

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
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    );
  }
};
