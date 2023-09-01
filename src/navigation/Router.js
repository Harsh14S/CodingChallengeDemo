import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import * as Colors from '../assets/Colors';
import HomeScreen from '../screens/Home/HomeScreen';
import Profile from '../screens/Profile/Profile';
const Stack = createNativeStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
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
