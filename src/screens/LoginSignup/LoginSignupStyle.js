import {StyleSheet} from 'react-native';
import * as Colors from '../../assets/Colors';
import {statusBarHeight} from '../../assets/Constants';
export const LoginSignupStyle = StyleSheet.create({
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
  loSiNavContainer: {
    backgroundColor: Colors.White,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loSiTxt: {fontSize: 14, fontWeight: '400', color: Colors.Black},
  loSiNavBtn: {marginLeft: 5},
  loSiNavTxt: {fontSize: 14, fontWeight: '500', color: Colors.Black},
});
