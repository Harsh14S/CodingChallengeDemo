import {StyleSheet} from 'react-native';
import * as Colors from '../../assets/Colors';
import {statusBarHeight} from '../../assets/Constants';

export const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    paddingBottom: 100,
    backgroundColor: Colors.Black11,
  },
  mainContainer: {flex: 1, paddingHorizontal: 20, justifyContent: 'center'},
  btnContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  userDataRow: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  userDataIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  userDetailTxt: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.Black,
    marginLeft: 10,
  },
  logoutBtn: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 7,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  btnIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
    tintColor: Colors.Red,
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: Colors.Red,
  },
});
