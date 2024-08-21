import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {PersonListItem} from './PersonListItem';

export default function Cast({data}) {
  return (
    <View>
      <Text className="text-white text-lg mx-4 my-5">Top Cast(Oyuncular)</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <PersonListItem person={item} />}
        horizontal
        contentContainerStyle={{paddingHorizontal: 15}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
