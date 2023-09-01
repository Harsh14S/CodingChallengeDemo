import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import * as Colors from '../../assets/Colors';
import {Modalize} from 'react-native-modalize';
import {Context} from '../../../global/ContextProvider';
import IconLinks from '../../assets/icons/IconLinks';

export default CustomModal = ({bottomSheetRef, navigation}) => {
  const {currentSelected, setCurrentSelected} = useContext(Context);

  function btn_show() {
    navigation.replace('Home');
  }
  function btn_profile() {
    navigation.replace('Profile');
  }
  return (
    <Modalize
      ref={bottomSheetRef}
      modalStyle={styles.modalStyle}
      modalHeight={350}
      alwaysOpen={60}
      handlePosition="inside">
      <View style={{height: 350, width: '100%'}}>
        <View
          style={{
            flex: 1,
            padding: 40,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            disabled={currentSelected === 'todo'}
            style={[styles.dataBtnStyle, {marginBottom: 20}]}
            onPress={() => {
              setCurrentSelected('todo');
            }}>
            <Image
              style={[
                styles.btnIcon,
                {
                  tintColor:
                    currentSelected === 'todo' ? Colors.LightGrey : '#333333',
                },
              ]}
              source={IconLinks.taskFill}
            />
            <Text
              style={[
                styles.btnTxt,
                {
                  color:
                    currentSelected === 'todo'
                      ? Colors.LightGrey
                      : Colors.Black,
                },
              ]}>
              {'ToDo'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={currentSelected === 'posts'}
            style={styles.dataBtnStyle}
            onPress={() => {
              setCurrentSelected('posts');
            }}>
            <Image
              style={[
                styles.btnIcon,
                {
                  tintColor:
                    currentSelected === 'posts' ? Colors.LightGrey : '#333333',
                },
              ]}
              source={IconLinks.postFill}
            />
            <Text
              style={[
                styles.btnTxt,
                {
                  color:
                    currentSelected === 'posts'
                      ? Colors.LightGrey
                      : Colors.Black,
                },
              ]}>
              {'Posts'}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 35,
              flex: 1,
              height: 50,
              backgroundColor: Colors.LightGrey,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 5,
              borderTopRightRadius: 6,
            }}
            onPress={() => btn_show()}>
            <Text
              style={{fontSize: 20, color: Colors.Black, fontWeight: '500'}}>
              {'Show'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              paddingHorizontal: 35,
              height: 50,
              backgroundColor: Colors.LightGrey,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 6,
            }}
            onPress={() => btn_profile()}>
            <Text
              style={{fontSize: 20, color: Colors.Black, fontWeight: '500'}}>
              {'Profile'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.45,
    shadowRadius: 16,
    flex: 1,
  },
  dataBtnStyle: {
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
    tintColor: '#333333',
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: Colors.Black,
  },
});
