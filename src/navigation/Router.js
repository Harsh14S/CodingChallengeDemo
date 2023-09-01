import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import * as Colors from '../assets/Colors';
import HomeScreen from '../screens/Home/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile/Profile';
import TabComponent from '../common/components/TabComponent';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 10,
          backgroundColor: Colors.White,
          shadowOpacity: 0.5,
          shadowRadius: 1,
          elevation: 5,
          shadowOffset: {
            height: 0,
            width: 0,
          },
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarButton: props => <TabComponent label={'Show'} {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarButton: props => <TabComponent label={'Profile'} {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
