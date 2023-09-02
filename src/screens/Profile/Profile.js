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
import {Context} from '../../../global/ContextProvider';
import CustomModal from '../../common/components/CustomModal';
import IconLinks from '../../assets/icons/IconLinks';
import * as Colors from '../../assets/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ProfileStyles as styles} from './ProfileStyles';

export default Profile = ({navigation}) => {
  const bottomSheet = useRef(null);
  const {setIsUserLoggedIn} = useContext(Context);
  const CurrentUser = useSelector(state => state.CurrentUserReducer);
  const [userData, setUserData] = useState({});

  async function btn_logout() {
    if (userData?.googleLogin) {
      try {
        await GoogleSignin.signOut().then(async () => {
          await AsyncStorage.removeItem('currentUser').then(() => {
            setIsUserLoggedIn(false);
          });
        });
      } catch (error) {
        console.error('Google logout error ', error);
      }
    } else {
      await AsyncStorage.removeItem('currentUser').then(() => {
        setIsUserLoggedIn(false);
      });
    }
  }

  useEffect(() => {
    if (CurrentUser?.CurrentUserSuccess) {
      if (CurrentUser?.data) {
        setUserData(CurrentUser?.data);
        console.log('CurrentUser ----> ', CurrentUser?.data);
      }
    }
  }, [CurrentUser]);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderComponent title={'Profile'} />
      <View style={styles.mainContainer}>
        <View style={styles.userDataRow}>
          <Image source={IconLinks.profileFill} style={styles.userDataIcon} />
          <Text style={styles.userDetailTxt}>{userData?.name}</Text>
        </View>
        <View style={styles.userDataRow}>
          <Image source={IconLinks.mailFill} style={styles.userDataIcon} />
          <Text style={styles.userDetailTxt}>{userData?.email}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => {
            btn_logout();
          }}>
          <Image style={styles.btnIcon} source={IconLinks.logout} />
          <Text style={styles.btnTxt}>{'Logout'}</Text>
        </TouchableOpacity>
      </View>
      <CustomModal bottomSheetRef={bottomSheet} navigation={navigation} />
    </View>
  );
};
