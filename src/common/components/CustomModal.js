import {
  Dimensions,
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
import {GetTodoDataAction} from '../../redux/action/GetTodoDataAction';
import {GetPostsDataAction} from '../../redux/action/GetPostsDataAction';
import {useDispatch} from 'react-redux';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

const {height, width} = Dimensions.get('screen');

export default CustomModal = ({
  bottomSheetRef,
  navigation,
  currentSelected,
  setLoader,
  isProfile,
}) => {
  const dispatch = useDispatch();
  const {setCurrentSelected} = useContext(Context);

  function btn_show() {
    navigation.replace('Home');
  }
  function btn_profile() {
    navigation.replace('Profile');
  }
  function btn_todo() {
    setLoader(true);
    setCurrentSelected('todo');
    dispatch(GetTodoDataAction());
    bottomSheetRef.current.collapse();
  }
  function btn_posts() {
    setLoader(true);
    setCurrentSelected('posts');
    dispatch(GetPostsDataAction());
    bottomSheetRef.current.collapse();
  }

  return (
    <BottomSheet ref={bottomSheetRef} snapPoints={['5%', '37%']}>
      <BottomSheetView style={styles.main}>
        <View style={styles.container}>
          <TouchableOpacity
            disabled={currentSelected === 'todo' || isProfile}
            style={[styles.dataBtnStyle, {marginBottom: 20}]}
            onPress={() => btn_todo()}>
            <Image
              style={[
                styles.btnIcon,
                {
                  tintColor:
                    currentSelected === 'todo' || isProfile
                      ? Colors.LightGrey
                      : '#333333',
                },
              ]}
              source={IconLinks.taskFill}
            />
            <Text
              style={[
                styles.btnTxt,
                {
                  color:
                    currentSelected === 'todo' || isProfile
                      ? Colors.LightGrey
                      : Colors.Black,
                },
              ]}>
              {'ToDo'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={currentSelected === 'posts' || isProfile}
            style={styles.dataBtnStyle}
            onPress={() => btn_posts()}>
            <Image
              style={[
                styles.btnIcon,
                {
                  tintColor:
                    currentSelected === 'posts' || isProfile
                      ? Colors.LightGrey
                      : '#333333',
                },
              ]}
              source={IconLinks.postFill}
            />
            <Text
              style={[
                styles.btnTxt,
                {
                  color:
                    currentSelected === 'posts' || isProfile
                      ? Colors.LightGrey
                      : Colors.Black,
                },
              ]}>
              {'Posts'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnStyleView}>
          <TouchableOpacity
            disabled={isProfile ? false : true}
            style={styles.bottomBtnStyle}
            onPress={() => btn_show()}>
            <Text
              style={[
                styles.bottomBtnTxt,
                {
                  color: isProfile ? Colors.Black : Colors.LightGrey,
                },
              ]}>
              {'Show'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={isProfile ? true : false}
            style={styles.bottomBtnStyle}
            onPress={() => btn_profile()}>
            <Text
              style={[
                styles.bottomBtnTxt,
                {
                  color: isProfile ? Colors.LightGrey : Colors.Black,
                },
              ]}>
              {'Profile'}
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  main: {
    height: height * 0.35,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
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
    elevation: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  btnStyleView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingBottom: 30,
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
  bottomBtnStyle: {
    paddingHorizontal: 35,
    width: '46%',
    height: 40,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  bottomBtnTxt: {
    fontSize: 20,
    color: Colors.Black,
    fontWeight: '500',
  },
});
