import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {statusBarHeight} from '../../assets/Constants';
import * as Api from '../../common/Api';
import {GetPostsDataAction} from '../../redux/action/GetPostsDataAction';
import {GetTodoDataAction} from '../../redux/action/GetTodoDataAction';
import CustomFullLoader from '../../common/components/CustomFullLoader';
import * as Colors from '../../assets/Colors';
import GreetingComponent from './GreetingComponent';
import RenderDataComponent from './RenderDataComponent';
import RBSheet from 'react-native-raw-bottom-sheet';
import IconLinks from '../../assets/icons/IconLinks';
import {Context} from '../../../global/ContextProvider';
import {Modalize} from 'react-native-modalize';
import CustomModal from '../../common/components/CustomModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const signUpData = useSelector(state => state.SignUpReducer);
  const GetTodoData = useSelector(state => state.GetTodoDataReducer);
  const GetPostsData = useSelector(state => state.GetPostsDataReducer);
  const [loader, setLoader] = useState(false);
  const [userData, setUserData] = useState({});
  const [apiData, setAPIData] = useState([]);
  const bottomSheet = useRef(null);

  useEffect(() => {
    setLoader(true);
    defaultApiCall();
  }, []);

  useEffect(() => {
    if (GetTodoData?.GetTodoDataSuccess) {
      if (GetTodoData?.data) {
        setLoader(false);
      }
    }
  }, [GetTodoData]);

  async function defaultApiCall() {
    dispatch(GetTodoDataAction());
  }

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <CustomFullLoader
        loaderSize={'large'}
        showLoader={loader}
        loaderColor={Colors.DarkGreen}
      />
      <GreetingComponent headerStyle={{marginBottom: 10}} />
      <RenderDataComponent />

      <CustomModal bottomSheetRef={bottomSheet} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
  },
});
