import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Colors from '../../assets/Colors';
import {useSelector} from 'react-redux';

export default RenderDataComponent = ({}) => {
  const [data, setData] = useState([]);
  const GetTodoData = useSelector(state => state.GetTodoDataReducer);
  const GetPostsData = useSelector(state => state.GetPostsDataReducer);

  useEffect(() => {
    if (GetTodoData?.GetTodoDataSuccess) {
      if (GetTodoData?.data) {
        setData(GetTodoData?.data);
      }
    }
  }, [GetTodoData]);

  return (
    <View style={styles.container}>
      <FlatList
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
