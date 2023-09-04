import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import * as Colors from '../../assets/Colors';
import {statusBarHeight} from '../../assets/Constants';
import IconLinks from '../../assets/icons/IconLinks';

export default ShowItemScreen = ({navigation, route}) => {
  const {type, data} = route?.params;

  function btn_back() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.headerStyle}>
        <TouchableOpacity style={styles.backBtn} onPress={() => btn_back()}>
          <Image source={IconLinks.leftArrow} style={styles.backBtnIcon} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitleTxt}>
            {type === 'todo' ? 'To Do' : 'Post'}
          </Text>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsRow}>
            <Text style={styles.detailKeyTxt}>
              {type === 'todo' ? 'Task:' : 'Post:'}
            </Text>
            <Text style={styles.detailValueTxt}>{data?.id}</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.detailKeyTxt}>{'UserID:'}</Text>
            <Text style={styles.detailValueTxt}>{data?.userId}</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.detailKeyTxt}>{'Title:'}</Text>
            <Text style={styles.detailValueTxt}>{data?.title}</Text>
          </View>
          {type === 'todo' ? (
            <View style={styles.detailsRow}>
              <Text style={styles.detailKeyTxt}>{'Status:'}</Text>
              <Text style={styles.detailValueTxt}>
                {data?.completed ? 'Completed' : 'Pending'}
              </Text>
            </View>
          ) : (
            <View style={styles.detailsRow}>
              <Text style={styles.detailKeyTxt}>{'Body:'}</Text>
              <Text style={styles.detailValueTxt}>{`${data?.body}`}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Black11,
    paddingTop: statusBarHeight,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    height: 50,
  },
  backBtnIcon: {height: 30, width: 30, resizeMode: 'contain'},
  backBtn: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 20,
    justifyContent: 'center',
  },
  headerTitleTxt: {color: Colors.Black, fontSize: 24, fontWeight: '500'},
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    backgroundColor: Colors.White,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  detailsRow: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  detailKeyTxt: {
    flex: 1,
    fontSize: 16,
    color: Colors.Black,
    fontWeight: '500',
    textAlign: 'right',
  },
  detailValueTxt: {
    flex: 4,
    fontSize: 16,
    color: Colors.Black,
    fontWeight: '400',
    marginLeft: 7,
  },
});
