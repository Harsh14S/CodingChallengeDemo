import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Colors from '../../assets/Colors';

export default HeaderComponent = ({headerStyle, title}) => {
  return (
    <View style={[styles.headerContainer, headerStyle]}>
      <Text style={styles.headerTxt}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: Colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 10,
    height: 50,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.Black,
  },
});
