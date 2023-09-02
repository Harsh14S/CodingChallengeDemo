import {
  Dimensions,
  Image,
  LayoutAnimation,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import * as Colors from '../../assets/Colors';
import CustomLoginTextInput from '../../common/components/CustomLoginTextInput';
import IconLinks from '../../assets/icons/IconLinks';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  emailRegEx,
  nameRegEx,
  nameRegEx2,
  passwordRegEx2,
  statusBarHeight,
} from '../../assets/Constants';
import {useDispatch, useSelector} from 'react-redux';
import {LoginSignupStyle as styles} from './LoginSignupStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomFullLoader from '../../common/components/CustomFullLoader';
import {CurrentUserAction} from '../../redux/action/CurrentUserAction';
import {Context} from '../../../global/ContextProvider';

GoogleSignin.configure({
  iosClientId:
    '277454502150-t5k5ksu60c83ipqr0sefic13lvhlve91.apps.googleusercontent.com',
  androidClientId:
    '277454502150-gpua89cdkmk2riph4aciv0c456t50bd9.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
});

export default SignUpScreen = ({navigation}) => {
  const {setIsUserLoggedIn} = useContext(Context);
  const dispatch = useDispatch();
  const CurrentUser = useSelector(state => state.CurrentUserReducer);

  const [nameV, setNameV] = useState('Test User');
  const [emailV, setEmailV] = useState('ok@mailinator.com');
  const [passwordV, setPasswordV] = useState('Test@123');
  const [cPasswordV, setCPasswordV] = useState('Test@123');
  const [nameE, setNameE] = useState('');
  const [emailE, setEmailE] = useState('');
  const [passwordE, setPasswordE] = useState('');
  const [cPasswordE, setCPasswordE] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  async function btn_googleSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn().then(res => {
        const obj = {
          name: res.user.name,
          email: res.user.email,
          googleLogin: true,
        };
        dispatch(CurrentUserAction(obj));
      });
    } catch (error) {
      console.log('Google signin error ----> ', error);
    }
  }

  // saveAllUsers :- adds the user to allUser
  async function saveAllUsers(item) {
    try {
      await AsyncStorage.setItem('allUser', JSON.stringify(item));
    } catch (error) {
      console.log('error while adding user: ', error);
    }
  }

  // saveCurrentUser :- adds to Currrent User

  async function saveCurrentUser(item) {
    try {
      await AsyncStorage.setItem('currentUser', JSON.stringify(item));
    } catch (error) {
      console.log('error while adding current user: ', error);
    }
  }

  async function signUpFunction() {
    const user = {
      name: nameV,
      email: emailV,
      password: passwordV,
      googleLogin: false,
    };

    let res = await AsyncStorage.getItem('allUser');
    let data = JSON.parse(res);

    if (data) {
      // check whether the user email exist or not from asyncStorage
      const uniqueUser =
        data?.filter(item => item?.email === user.email).length === 0;
      if (uniqueUser) {
        let obj = [...data, user];
        saveAllUsers(obj);
        dispatch(CurrentUserAction(user));
      } else {
        setEmailE('Email already taken');
        setShowLoader(false);
      }
    } else {
      let obj = [user];
      saveAllUsers(obj);
      dispatch(CurrentUserAction(user));
    }
  }

  function btn_signUp() {
    setShowLoader(true);
    if (!nameRegEx2.test(nameV.trim())) {
      setNameE('Please enter appropriate name');
    } else {
      setNameE('');
    }
    if (!emailRegEx.test(emailV)) {
      setEmailE('Please enter a valid email');
    } else {
      setEmailE('');
    }
    if (!passwordRegEx2.test(passwordV)) {
      setPasswordE(
        'Must contain 8 characters, atleast one upperCase and a number',
      );
    } else {
      setPasswordE('');
    }
    if (passwordV !== cPasswordV) {
      setCPasswordE(`Password doesn't match`);
    } else {
      setCPasswordE('');
    }

    if (
      nameRegEx2.test(nameV) &&
      emailRegEx.test(emailV) &&
      passwordRegEx2.test(passwordV) &&
      passwordV === cPasswordV
    ) {
      signUpFunction();
    } else {
      setShowLoader(false);
    }
  }

  useEffect(() => {
    if (nameV.trim() && emailV.trim() && passwordV && cPasswordV) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [emailV, passwordV, cPasswordV]);

  useEffect(() => {
    if (CurrentUser?.CurrentUserSuccess) {
      if (CurrentUser?.data) {
        saveCurrentUser(CurrentUser?.data);
        setShowLoader(false);
        setIsUserLoggedIn(true);
      }
    }
    console.log('CurrentUser ====> ', CurrentUser);
  }, [CurrentUser]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <CustomFullLoader showLoader={showLoader} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>{'SignUp'}</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.emailLoginContainer}>
          <CustomLoginTextInput
            value={nameV}
            icon={IconLinks.profileFill}
            placeholder={'Enter your name'}
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={text => {
              setNameV(text);
              setNameE('');
            }}
            onBlur={() => {}}
            onFocus={() => {}}
            containerStyle={{marginBottom: 15}}
            eTxt={nameE}
          />
          <CustomLoginTextInput
            value={emailV}
            icon={IconLinks.mailFill}
            placeholder={'Enter your email'}
            autoCorrect={false}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={text => {
              setEmailV(text);
              setEmailE('');
            }}
            onBlur={() => {}}
            onFocus={() => {}}
            containerStyle={{marginBottom: 15}}
            eTxt={emailE}
          />
          <CustomLoginTextInput
            value={passwordV}
            icon={IconLinks.lockCloseFill}
            placeholder={'Enter your password'}
            autoCorrect={false}
            autoCapitalize="none"
            secure={true}
            onChangeText={text => {
              setPasswordV(text);
              setPasswordE('');
            }}
            onBlur={() => {}}
            onFocus={() => {}}
            containerStyle={{marginBottom: 15}}
            eTxt={passwordE}
          />
          <CustomLoginTextInput
            value={cPasswordV}
            icon={IconLinks.lockCloseFill}
            placeholder={'Confirm your password'}
            autoCorrect={false}
            autoCapitalize="none"
            secure={true}
            onChangeText={text => {
              setCPasswordV(text);
              setCPasswordE('');
            }}
            onBlur={() => {}}
            onFocus={() => {}}
            containerStyle={{marginBottom: 30}}
            eTxt={cPasswordE}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.signUpBtn}
            disabled={disabled}
            onPress={() => btn_signUp()}>
            <Image style={styles.btnIcon} source={IconLinks.login} />
            <Text
              style={[
                styles.btnTxt,
                {color: disabled ? Colors.LightGrey : Colors.Black},
              ]}>
              {'Sign Up'}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.separatorTxt}>Or</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={() => btn_googleSignIn()}>
            <Image style={styles.btnIcon} source={IconLinks.google} />
            <Text style={styles.btnTxt}>{'Google'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loSiNavContainer}>
          <Text style={styles.loSiTxt}>{'Are you already an user?'}</Text>
          <TouchableOpacity
            style={styles.loSiNavBtn}
            onPress={() => navigation.replace('Login')}>
            <Text style={styles.loSiNavTxt}>{'Login'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
