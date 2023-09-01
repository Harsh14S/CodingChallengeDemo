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
import CustomFullLoader from '../../common/components/CustomFullLoader';
import * as Colors from '../../assets/Colors';
import GreetingComponent from './GreetingComponent';
import RenderDataComponent from './RenderDataComponent';
import CustomModal from '../../common/components/CustomModal';

export default HomeScreen = ({navigation}) => {
  const signUpData = useSelector(state => state.SignUpReducer);
  const GetTodoData = useSelector(state => state.GetTodoDataReducer);
  const GetPostsData = useSelector(state => state.GetPostsDataReducer);
  const [loader, setLoader] = useState(false);
  const [userData, setUserData] = useState({});
  const [apiData, setAPIData] = useState([]);
  const bottomSheet = useRef(null);

  // setLoader(true);
  // defaultApiCall();

  // useEffect(() => {
  //   if (GetTodoData?.GetTodoDataSuccess) {
  //     if (GetTodoData?.data) {
  //       setLoader(false);
  //     }
  //   }
  // }, [GetTodoData]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <CustomFullLoader
        loaderSize={'large'}
        showLoader={loader}
        loaderColor={Colors.DarkGreen}
      />
      <GreetingComponent headerStyle={{marginBottom: 10}} />
      <RenderDataComponent setLoader={setLoader} />
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
