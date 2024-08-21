import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import MovieListItem from '../components/MovieListItem';

const MovieList = ({title, data, hideSeeAll}) => {
  return (
    <View className="my-8 space-y-4">
      <View className="flex-row mx-4 justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text className="text-[#eab300] text-lg">See All</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        data={data}
        contentContainerStyle={{paddingHorizontal: 15}}
        renderItem={({item}) => <MovieListItem movie={item} key={item.id} />}
      />
    </View>
  );
};

export default MovieList;