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
import React, {useEffect, useState} from 'react';
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
import {useDispatch} from 'react-redux';
import {LoginSignupStyle as styles} from './LoginSignupStyle';
import {CurrentUserAction} from '../../redux/action/CurrentUserAction';

GoogleSignin.configure({
  iosClientId:
    '277454502150-t5k5ksu60c83ipqr0sefic13lvhlve91.apps.googleusercontent.com',
  androidClientId:
    '277454502150-gpua89cdkmk2riph4aciv0c456t50bd9.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
});

export default LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [nameV, setNameV] = useState('Test User');
  const [emailV, setEmailV] = useState('ok@mailinator.com');
  const [passwordV, setPasswordV] = useState('Test@123');
  const [emailE, setEmailE] = useState('');
  const [passwordE, setPasswordE] = useState('');
  const [disabled, setDisabled] = useState(true);

  async function btn_googleSignIn() {
    try {
      // await GoogleSignin.hasPlayServices();
      // await GoogleSignin.signIn().then(res => {
      //   const obj = {
      //     name: res.user.name,
      //     email: res.user.email,
      //     googleLogin: true,
      //   };
      // dispatch(SignUpAction(obj));
      // navigation.navigate('Home');
      // console.log('userInfo ----> ', obj);
      // });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  function btn_login() {
    const obj = {
      email: emailV,
      password: passwordV,
      googleLogin: false,
    };
    dispatch(CurrentUserAction(obj));
    // navigation.replace('Home');
  }
  function validation() {
    if (!emailRegEx.test(emailV)) {
      setEmailE('Please enter a valid email');
    } else {
      setEmailE('');
    }

    if (emailRegEx.test(emailV) && passwordRegEx2.test(passwordV)) {
      btn_login();
    }
  }

  useEffect(() => {
    if (emailV.trim() && passwordV) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [emailV, passwordV]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>{'Login'}</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.emailLoginContainer}>
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
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.signUpBtn}
            disabled={disabled}
            onPress={() => validation()}>
            <Image style={styles.btnIcon} source={IconLinks.login} />
            <Text
              style={[
                styles.btnTxt,
                {color: disabled ? Colors.LightGrey : Colors.Black},
              ]}>
              {'Login'}
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
          <Text style={styles.loSiTxt}>{'Create your new account?'}</Text>
          <TouchableOpacity
            style={styles.loSiNavBtn}
            onPress={() => navigation.replace('SignUp')}>
            <Text style={styles.loSiNavTxt}>{'SignUp'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
