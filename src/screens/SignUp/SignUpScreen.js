import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import * as Colors from '../../assets/Colors';
import CustomLoginTextInput from '../../components/CustomLoginTextInput';
import IconLinks from '../../assets/icons/IconLinks';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  iosClientId:
    '277454502150-t5k5ksu60c83ipqr0sefic13lvhlve91.apps.googleusercontent.com',
  androidClientId:
    '277454502150-gpua89cdkmk2riph4aciv0c456t50bd9.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
});
const statusBarHeight = StatusBar.currentHeight;
export default SignUpScreen = () => {
  const [emailV, setEmailV] = useState('');
  const [passwordV, setPasswordV] = useState('');
  const [cPasswordV, setCPasswordV] = useState('');
  const [userInfo, setUserInfo] = useState({});

  async function btn_googleSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo ----> ', userInfo);
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

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>{'SignUp'}</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.emailLoginContainer}>
          <CustomLoginTextInput
            value={emailV}
            icon={IconLinks.email}
            placeholder={'Enter your email'}
            autoCorrect={false}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={text => {
              setEmailV(text);
            }}
            onBlur={() => {}}
            onFocus={() => {}}
            containerStyle={{marginBottom: 15}}
          />
          <CustomLoginTextInput
            value={passwordV}
            icon={IconLinks.password}
            placeholder={'Enter your password'}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={text => {
              setPasswordV(text);
            }}
            onBlur={() => {}}
            onFocus={() => {}}
            containerStyle={{marginBottom: 15}}
          />
          <CustomLoginTextInput
            value={cPasswordV}
            icon={IconLinks.password}
            placeholder={'Confirm your password'}
            autoCorrect={false}
            keyboardType="email-address"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={text => {
              setCPasswordV(text);
            }}
            onBlur={() => {}}
            onFocus={() => {}}
            containerStyle={{marginBottom: 30}}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.signUpBtn}>
            <Text style={styles.btnTxt}>{'Sign Up'}</Text>
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
