import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Colors from '../../assets/Colors';

export default HeaderComponent = ({headerStyle, title}) => {
  return (
    <View style={[styles.headerContainer, headerStyle]}>
      {title ? <Text style={styles.headerTxt}>{title}</Text> : null}
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
    paddingHorizontal: 10,
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
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: Colors.Black,
    textAlign: 'center',
  },
});
