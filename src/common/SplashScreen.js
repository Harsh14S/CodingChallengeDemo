import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        const isLoggedIn = !!userData;

        if (isLoggedIn) {
          navigation.navigate('Home');
        } else {
          navigation.navigate('SignUp');
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, [navigation]);

  return null; // This component doesn't render anything
};

export default SplashScreen;
