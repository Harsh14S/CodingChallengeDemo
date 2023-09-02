import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Colors from '../../assets/Colors';
import moment from 'moment';
import {useSelector} from 'react-redux';

export default GreetingComponent = ({headerStyle}) => {
  const CurrentUser = useSelector(state => state.CurrentUserReducer);

  const [greetTitle, setGreetTitle] = useState('');

  function headerTitle(user) {
    const currentTime = moment();
    let title = '';
    if (
      currentTime.isBetween(moment('04:00', 'HH:mm'), moment('12:00', 'HH:mm'))
    ) {
      title = 'Good Morning, ' + user?.name;
      setGreetTitle(title);
    }
    if (
      currentTime.isBetween(moment('12:00', 'HH:mm'), moment('16:00', 'HH:mm'))
    ) {
      title = 'Good Afternoon, ' + user?.name;
      setGreetTitle(title);
    } else {
      title = 'Good Night, ' + user?.name;
      setGreetTitle(title);
    }
  }
  useEffect(() => {
    if (CurrentUser?.CurrentUserSuccess) {
      if (CurrentUser?.data) {
        headerTitle(CurrentUser?.data);
      }
    }
  }, [CurrentUser]);
  return (
    <View style={[styles.headerContainer, headerStyle]}>
      <Text style={styles.headerTxt}>{greetTitle}</Text>
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
