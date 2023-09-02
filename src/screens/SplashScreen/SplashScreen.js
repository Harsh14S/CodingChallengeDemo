import {StyleSheet, Animated, Text, View} from 'react-native';
import React, {useContext, useEffect, useRef} from 'react';
import * as Colors from '../../assets/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {CurrentUserAction} from '../../redux/action/CurrentUserAction';
import {Context} from '../../../global/ContextProvider';

export default SplashScreen = ({navigation}) => {
  const {setIsUserLoggedIn} = useContext(Context);
  const dispatch = useDispatch();
  const fade = useRef(new Animated.Value(0)).current;

  async function getCurrentUser() {
    const currentUser = JSON.parse(await AsyncStorage.getItem('currentUser'));

    console.log('currentUser ----> ', currentUser);
    if (currentUser) {
      setTimeout(() => {
        animationFadeout();
        dispatch(CurrentUserAction(currentUser));
        setIsUserLoggedIn(true);
      }, 1000);
    } else {
      setTimeout(() => {
        animationFadeout();
        setTimeout(() => {
          navigation.replace('Login');
        }, 1000);
      }, 1000);
    }
  }

  const animationFadeIn = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const animationFadeout = () => {
    Animated.timing(fade, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animationFadeIn();
    getCurrentUser();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.splashTxt, {opacity: fade}]}>
        {'Welcome'}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTxt: {
    color: Colors.Black,
    fontSize: 36,
    fontWeight: '700',
  },
});
