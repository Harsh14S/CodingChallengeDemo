import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import * as Colors from '../assets/Colors';
import HomeScreen from '../screens/Home/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile/Profile';
import TabComponent from '../common/components/TabComponent';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: Colors.White},
      }}>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      {/* <Stack.Screen name="TabComponent" component={MyTab} /> */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

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
