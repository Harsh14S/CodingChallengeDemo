import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import * as Colors from '../../assets/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {Context} from '../../../global/ContextProvider';
import {GetTodoDataAction} from '../../redux/action/GetTodoDataAction';

export default RenderDataComponent = ({setLoader, navigation}) => {
  const dispatch = useDispatch();
  const {currentSelected} = useContext(Context);
  const [data, setData] = useState([]);
  const GetTodoData = useSelector(state => state.GetTodoDataReducer);
  const GetPostsData = useSelector(state => state.GetPostsDataReducer);

  function btn_itemPressed(item) {
    navigation.navigate('ShowItem', {data: item, type: currentSelected});
  }

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
        contentContainerStyle={styles.flatlistContentContainer}
        showsVerticalScrollIndicator={false}
        data={data}
        ItemSeparatorComponent={() => (
          <View style={styles.flatlistItemSeparator} />
        )}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.itemBtnStyle}
            onPress={() => btn_itemPressed(item)}>
            <Text style={styles.bulletTxt}>{index + 1 + '. '}</Text>
            <Text style={styles.titleTxt}>{item?.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  flatlistContentContainer: {paddingBottom: 50, marginHorizontal: 30},
  flatlistItemSeparator: {marginVertical: 5},
  itemBtnStyle: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  bulletTxt: {color: Colors.DarkGrey},
  titleTxt: {color: Colors.Black, flexWrap: 'wrap'},
});
