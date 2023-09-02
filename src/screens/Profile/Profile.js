import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import HeaderComponent from '../../common/components/HeaderComponent';
import {statusBarHeight} from '../../assets/Constants';
import {Context} from '../../../global/ContextProvider';
import CustomModal from '../../common/components/CustomModal';
import IconLinks from '../../assets/icons/IconLinks';
import * as Colors from '../../assets/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Profile = ({navigation}) => {
  const bottomSheet = useRef(null);
  const {currentSelected, setCurrentSelected} = useContext(Context);
  const signUpData = useSelector(state => state.SignUpReducer);
  const [userData, setUserData] = useState({});

  async function btn_logout() {
    await AsyncStorage.removeItem('userData');
    navigation.navigate('SignUp');
  }

  useEffect(() => {
    if (signUpData?.SignUpSuccess) {
      if (signUpData?.data) {
        setUserData(signUpData?.data);
        // console.log(signUpData?.data);
      }
    }
  }, [signUpData]);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderComponent title={'Profile'} />
      <View style={styles.mainContainer}>
        <View style={styles.userDataRow}>
          <Image source={IconLinks.profileFill} style={styles.userDataIcon} />
          <Text style={styles.txtInputStyle}>{userData?.name}</Text>
        </View>
        <View style={styles.userDataRow}>
          <Image source={IconLinks.mailFill} style={styles.userDataIcon} />
          <Text style={styles.txtInputStyle}>{userData?.email}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => {
            btn_logout();
          }}>
          <Text style={styles.btnTxt}>{'Logout'}</Text>
        </TouchableOpacity>
      </View>
      <CustomModal bottomSheetRef={bottomSheet} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    paddingBottom: 100,
    // backgroundColor: Colors.DarkGrey,
  },
  mainContainer: {flex: 1, paddingHorizontal: 20, justifyContent: 'center'},
  btnContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  userDataRow: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderRadius: 4,
    paddingHorizontal: 10,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  labelTxt: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.Black,
    marginRight: 10,
  },
  userDataIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  txtInputStyle: {
    flex: 1,
    padding: 10,
  },
  logoutBtn: {
    backgroundColor: Colors.Red,
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
  btnTxt: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: Colors.White,
  },
});
