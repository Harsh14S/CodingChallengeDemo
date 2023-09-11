import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Api from '../../common/Api';
import CustomFullLoader from '../../common/components/CustomFullLoader';
import * as Colors from '../../assets/Colors';
import {statusBarHeight} from '../../assets/Constants';
import Fonts from '../../assets/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import InstaDataModal from './InstaDataModal';

export default InstaScreen = ({navigation, route}) => {
  const [instaToken, setInstaToken] = useState({});
  const [userData, setUserData] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [mediaID, setMediaID] = useState('');

  useEffect(() => {
    setInstaToken(route.params.data);
  }, [route]);

  useEffect(() => {
    if (instaToken?.access_token) {
      const {user_id, access_token} = instaToken;
      getUserMediaIDCap();
    }
  }, [instaToken]);

  // async function getInstaUserInfo() {
  //   setShowLoader(true);
  //   const {user_id, access_token} = instaToken;
  //   await Api.getInstaUsername(access_token)
  //     .then(res => {
  //       setShowLoader(false);
  //       setUserData(res);
  //       // console.log('get username ----> ', res);
  //     })
  //     .catch(e => {
  //       setShowLoader(false);
  //       console.log('Errorrrrr -----> ', e);
  //     });
  // }
  async function getUserMediaIDCap() {
    setShowLoader(true);
    const {user_id, access_token} = instaToken;
    await Api.getUserMediaIDCap(access_token)
      .then(res => {
        setShowLoader(false);
        setUserData(res);
        // console.log('get username ----> ', res);
      })
      .catch(e => {
        setShowLoader(false);
        console.log('Errorrrrr -----> ', e);
      });
  }

  function btn_mediaID(media_id) {
    setModalShow(true);
    setMediaID(media_id);
  }
  return (
    <View style={styles.container}>
      <CustomFullLoader showLoader={showLoader} />
      <FlatList
        data={userData?.data}
        contentContainerStyle={{paddingVertical: 20, paddingHorizontal: 25}}
        ItemSeparatorComponent={() => (
          <View
            style={{
              marginVertical: 5,
            }}
          />
        )}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.itemBtn}
              onPress={() => btn_mediaID(item?.id)}>
              <Text style={styles.itemTxt}>{item?.id}</Text>
            </TouchableOpacity>
          );
        }}
        extraData={userData?.data}
      />
      {modalShow ? (
        <InstaDataModal
          visible={modalShow}
          instaToken={instaToken}
          media_id={mediaID}
          setModalShow={setModalShow}
        />
      ) : null}
      {/* <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.signUpBtn} onPress={() => {}}>
          <Text style={styles.btnTxt}>{'User Image'}</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight + 20,
  },
  btnContainer: {
    width: '100%',
    padding: RFValue(20),
  },
  signUpBtn: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: RFValue(7),
    borderRadius: RFValue(5),
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowRadius: RFValue(1),
    elevation: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  btnIcon: {
    height: RFValue(20),
    width: RFValue(20),
    marginRight: RFValue(10),
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: RFValue(16),
    fontFamily: Fonts.Medium,
    color: Colors.Black,
  },
  itemBtn: {
    backgroundColor: Colors.LightGrey,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: RFValue(7),
    borderRadius: RFValue(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTxt: {
    textAlign: 'center',
    fontSize: RFValue(14),
    fontFamily: Fonts.Regular,
    color: Colors.Black,
  },
});
