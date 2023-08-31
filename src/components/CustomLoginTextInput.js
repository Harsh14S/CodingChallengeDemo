import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import * as Colors from '../assets/Colors';

export default CustomLoginTextInput = ({
  label,
  containerStyle,
  icon,
  ...props
}) => {
  return (
    <View style={[styles.txtInputContainer, containerStyle]}>
      {label ? <Text style={styles.labelTxt}>{label}</Text> : null}
      {icon ? <Image source={icon} style={styles.inputIcon} /> : null}
      <TextInput style={styles.txtInputStyle} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  txtInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  labelTxt: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.Black,
    marginRight: 10,
  },
  inputIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  txtInputStyle: {
    flex: 1,
    padding: 10,
  },
});
