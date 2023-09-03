import {
  Image,
  LayoutAnimation,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Colors from '../../assets/Colors';

export default CustomLoginTextInput = ({
  label,
  containerStyle,
  icon,
  secure,
  // placeholder,
  eTxt,
  ...props
}) => {
  const [hide, setHide] = useState(secure);
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.txtInputContainer}>
        {label ? <Text style={styles.labelTxt}>{label}</Text> : null}
        {icon ? <Image source={icon} style={styles.inputIcon} /> : null}
        <TextInput
          placeholderTextColor={Colors.DarkGrey}
          // placeholder={placeholder}
          style={styles.txtInputStyle}
          secureTextEntry={hide}
          {...props}
        />
        {secure ? (
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => setHide(!hide)}
            // onPressIn={() => setHide(false)}
            // onPressOut={() => setHide(true)}
            hitSlop={{top: 15, bottom: 15, right: 15, left: 15}}>
            <Image
              source={!hide ? IconLinks.eyeCloseFill : IconLinks.eyeOpenFill}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {eTxt ? <Text style={styles.errorTxtStyle}>{eTxt}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  txtInputContainer: {
    flexDirection: 'row',
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
  inputIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  txtInputStyle: {
    flex: 1,
    padding: 10,
    color: Colors.Black,
  },
  btnStyle: {
    marginRight: 5,
  },
  eyeIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  errorTxtStyle: {
    marginHorizontal: 5,
    fontSize: 12,
    fontWeight: '400',
    color: Colors.Red,
    marginTop: 2,
    flexWrap: 'wrap',
  },
});
