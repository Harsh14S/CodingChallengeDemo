import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Colors from '../../assets/Colors';

export default LogoutModal = ({showMoadal, onLogout, onCancel}) => {
  return (
    <Modal visible={showMoadal} statusBarTranslucent transparent={true}>
      <View style={styles.containerStyle}>
        <View style={styles.mainContainer}>
          <Text style={styles.alertTitleTxt}>
            {'Are you sure you want to logout?'}
          </Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={[styles.btn, {marginRight: 10}]}
              onPress={() => onCancel()}>
              <Text
                style={[
                  styles.btnTxt,
                  {
                    color: Colors.Black,
                  },
                ]}>
                {'Cancel'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => onLogout()}>
              <Text
                style={[
                  styles.btnTxt,
                  {
                    color: Colors.Red,
                  },
                ]}>
                {'Logout'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    // paddingHorizontal: 40,
  },
  mainContainer: {
    backgroundColor: Colors.White,
    width: '80%',
    padding: 20,
    borderRadius: 8,
  },
  alertTitleTxt: {
    color: Colors.Black,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
  },
  btnContainer: {flexDirection: 'row', marginTop: 30},
  btn: {
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: Colors.White,
    flex: 1,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
});
