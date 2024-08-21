import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppScreens} from '../navigation/types';
import {useEffect, useState} from 'react';
import {GetSearchMovies} from '../app/actions/movieAction';
import {useDispatch, useSelector} from 'react-redux';
import {getSearchResultsState} from '../app/movieSelector';
import MovieListItem from '../components/MovieListItem';
const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  /* girilen yazıyı almak için  */
  useEffect(() => {
    dispatch(GetSearchMovies(searchText));
  }, [searchText, dispatch]);

  const searchResults = useSelector(getSearchResultsState());

  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <View className="mx-4 border border-neutral-500 rounded-full flex-row justify-between mb-3">
        {/* Arama Çubuğu */}
        <TextInput
          //bu alana her karakter girildiğinde texti searchtext gönderirir
          onChangeText={setSearchText}
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          className=" text-white tracking-wider font-semibold py-2 px-6"
        />
        {/* çarpı(iptal) ikonu*/}
        <TouchableOpacity
          /* tıklandığında anasayfaya göndermek için */
          onPress={() => navigation.navigate(AppScreens.Home)}
          className="bg-neutral-700 rounded-full p-2 m-1 items-center justify-center flex">
          <Icon name="close" color="#fff" size={25} />
        </TouchableOpacity>
      </View>

      {searchResults?.length > 0 && (
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 15,
            paddingBottom: 30,
          }}>
          <Text className="text-white font-semibold ml-1 my-2">
            Result Length: {searchResults?.length}
          </Text>
          <View className="flex-row flex-wrap justify-between px-5">
            {searchResults.map((movie, index) => (
              <MovieListItem searchPage movie={movie} key={index} />
            ))}
          </View>
        </ScrollView>
      )}
      {/* eğer veri bulunamazsa ekrana bastırılacak resim */}
      {searchResults?.length === 0 && (
        <View className="items-center justify-center">
          <Image
            source={require('./../assets/images/movieTime.png')}
            className="w-96 h-96"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
