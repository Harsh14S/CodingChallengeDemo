import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import * as Colors from '../../assets/Colors';
import {Context} from '../../../global/ContextProvider';

const TabComponent = ({label, accessibilityState, onPress, onLongPress}) => {
  const focused = accessibilityState.selected;
  const {bottomSheetRef} = useContext(Context);

  return (
    <TouchableOpacity
      hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
      activeOpacity={1}
      style={{
        flex: 1,
        paddingHorizontal: 35,
        // backgroundColor: Colors.White,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}
      onLongPress={onLongPress}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 20,
          color: focused ? Colors.Black : Colors.DarkGrey,
          fontWeight: '500',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabComponent;
