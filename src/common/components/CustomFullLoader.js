import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Colors from '../../assets/Colors';

export default CustomFullLoader = ({showLoader, loaderSize, loaderColor}) => {
  return (
    <Modal visible={showLoader} statusBarTranslucent transparent={true}>
      <View style={styles.containerStyle}>
        <ActivityIndicator
          size={loaderSize ? loaderSize : 'large'}
          color={loaderColor ? loaderColor : Colors.Green}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.Transparent,
  },
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
});
