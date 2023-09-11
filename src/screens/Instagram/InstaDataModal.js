import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Api from '../../common/Api';
import CustomFullLoader from '../../common/components/CustomFullLoader';
import * as Colors from '../../assets/Colors';
import {statusBarHeight} from '../../assets/Constants';
import Fonts from '../../assets/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import IconLinks from '../../assets/icons/IconLinks';

export default InstaDataModal = ({
  visible,
  media_id,
  instaToken,
  setModalShow,
}) => {
  const [showLoader, setShowLoader] = useState(true);
  const [mediaData, setMediaData] = useState({});

  async function getUserMediaData() {
    const {access_token} = instaToken;
    await Api.getUserMediaData(media_id, access_token)
      .then(res => {
        setMediaData(res);
        console.log('get data ----> ', res);
      })
      .then(() => {
        setShowLoader(false);
      })
      .catch(e => {
        // setShowLoader(false);
        console.log('Errorrrrr -----> ', e);
      });
  }

  useEffect(() => {
    if (visible) {
      getUserMediaData();
    }
  }, [visible]);
  useEffect(() => {
    if (mediaData?.id) {
      setShowLoader(false);
    }
  }, [mediaData]);
  return (
    <Modal visible={visible} transparent statusBarTranslucent>
      <View style={styles.transContainer}>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-start',
            marginTop: RFValue(35),
            paddingHorizontal: RFValue(20),
          }}>
          <TouchableOpacity style={{}} onPress={() => setModalShow(false)}>
            <Image
              style={{
                height: RFValue(30),
                width: RFValue(30),
              }}
              source={IconLinks.leftArrow}
            />
          </TouchableOpacity>
        </View>
        {showLoader ? (
          <ActivityIndicator size={'large'} style={{flex: 1}} />
        ) : (
          <View style={styles.mediaContainer}>
            {mediaData?.media_type === 'IMAGE' ? (
              <Image
                source={{uri: mediaData?.media_url}}
                style={{
                  width: '100%',
                  height: RFValue(300),
                  resizeMode: 'contain',
                }}
              />
            ) : null}
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  transContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  mediaContainer: {
    flex: 1,
    marginTop: 20,
  },
});
