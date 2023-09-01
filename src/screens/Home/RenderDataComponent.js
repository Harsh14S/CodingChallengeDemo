import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import * as Colors from '../../assets/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {Context} from '../../../global/ContextProvider';
import {GetTodoDataAction} from '../../redux/action/GetTodoDataAction';
import {GetPostsDataAction} from '../../redux/action/GetPostsDataAction';

export default RenderDataComponent = ({setLoader}) => {
  const dispatch = useDispatch();
  const {currentSelected, setCurrentSelected} = useContext(Context);
  const [data, setData] = useState([]);
  const GetTodoData = useSelector(state => state.GetTodoDataReducer);
  const GetPostsData = useSelector(state => state.GetPostsDataReducer);

  useEffect(() => {
    // dispatch(GetTodoDataAction());
  }, []);
  useEffect(() => {
    console.log('currentSelected --> ', currentSelected);
    // setLoader(true);
    // if (currentSelected === 'todo') {
    //   console.log('selected todo');

    // } else if (currentSelected === 'posts') {
    // }
  }, [currentSelected]);

  useEffect(() => {
    if (currentSelected === 'todo') {
      console.log('inside todo GetTodoData');
      if (GetTodoData?.GetTodoDataSuccess) {
        if (GetTodoData?.data) {
          console.log('SJHJSA', GetTodoData);
          setLoader(false);
          setData(GetTodoData?.data);
        }
      }
      console.log('GetTodoData?.data --> ', GetTodoData);
    } else if (currentSelected === 'posts') {
      if (GetPostsData?.GetPostsDataSuccess) {
        if (GetPostsData?.data) {
          setLoader(false);
          setData(GetPostsData?.data);
          console.log('GetPostsData?.data --> ', GetPostsData?.data);
        }
      }
    }
  }, [GetPostsData, GetTodoData, currentSelected]);
  return (
    <View style={styles.container}>
      <FlatList
        initialNumToRender={30}
        contentContainerStyle={{paddingBottom: 50, marginHorizontal: 30}}
        showsVerticalScrollIndicator={false}
        data={data}
        ItemSeparatorComponent={() => <View style={{marginVertical: 5}} />}
        renderItem={({item, index}) => (
          <TouchableOpacity style={styles.itemBtnStyle} onPress={() => {}}>
            <Text style={{color: Colors.DarkGrey}}>{index + 1 + '. '}</Text>
            <Text style={{color: Colors.Black, flexWrap: 'wrap'}}>
              {item?.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    paddingVertical: 20,

    // backgroundColor: Colors.LightGrey,
  },
  itemBtnStyle: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
});
