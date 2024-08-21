import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {selectFavorites} from '../app/slices/favoriteSlice';
import FavoriteCard from '../components/FavoriteCard';

const FavoritesScreen = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <Text className="text-[20px] text-center text-white my-4">
        Favorites Movies
      </Text>
      <FlatList
        data={favorites}
        renderItem={({item}) => <FavoriteCard item={item} />}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => (
          <View>
            <Text>Film beğenmediniz</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default FavoritesScreen;