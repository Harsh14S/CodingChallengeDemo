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
import {SignUpAction} from '../../redux/action/SignUpAction';

GoogleSignin.configure({
  iosClientId:
    '277454502150-t5k5ksu60c83ipqr0sefic13lvhlve91.apps.googleusercontent.com',
  androidClientId:
    '277454502150-gpua89cdkmk2riph4aciv0c456t50bd9.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
});

export default SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();

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

  async function btn_googleSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn().then(res => {
        const obj = {
          name: res.user.name,
          email: res.user.email,
          googleLogin: true,
        };
        dispatch(SignUpAction(obj));
        // navigation.navigate('Home');

        // console.log('userInfo ----> ', obj);
      });
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

  function btn_signUp() {
    const obj = {
      name: nameV,
      email: emailV,
      password: passwordV,
      googleLogin: false,
    };
    dispatch(SignUpAction(obj));
    // navigation.replace('Home');
  }
  function validation() {
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
      btn_signUp();
    }
  }

  useEffect(() => {
    if (nameV.trim() && emailV.trim() && passwordV && cPasswordV) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [emailV, passwordV, cPasswordV]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
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
            onPress={() => validation()}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
  },
  headerContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.Black,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: 20,
  },
  emailLoginContainer: {
    // backgroundColor: 'grey',
    marginTop: 20,
  },
  separatorTxt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: Colors.Black,
    marginVertical: 30,
  },
  btnContainer: {
    width: '100%',
  },
  signUpBtn: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 7,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  btnIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: Colors.Black,
  },
});
