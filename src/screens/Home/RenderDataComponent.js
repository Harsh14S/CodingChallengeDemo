import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import * as Colors from '../../assets/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {Context} from '../../../global/ContextProvider';
import {GetTodoDataAction} from '../../redux/action/GetTodoDataAction';

export default RenderDataComponent = ({setLoader}) => {
  const dispatch = useDispatch();
  const {currentSelected, setCurrentSelected} = useContext(Context);
  const [data, setData] = useState([]);
  const GetTodoData = useSelector(state => state.GetTodoDataReducer);
  const GetPostsData = useSelector(state => state.GetPostsDataReducer);

  useEffect(() => {
    dispatch(GetTodoDataAction());
  }, []);

  useEffect(() => {
    if (currentSelected === 'todo') {
      if (GetTodoData?.GetTodoDataSuccess) {
        if (GetTodoData?.data) {
          setLoader(false);
          setData(GetTodoData?.data);
        }
      }
    } else if (currentSelected === 'posts') {
      if (GetPostsData?.GetPostsDataSuccess) {
        if (GetPostsData?.data) {
          setData(GetPostsData?.data);
          setLoader(false);
        }
      }
    }
  }, [GetPostsData, GetTodoData]);
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
