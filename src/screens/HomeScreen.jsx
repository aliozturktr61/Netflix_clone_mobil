import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Logo from '../components/Logo';
import {useNavigation} from '@react-navigation/native';
import { AppScreens } from '../navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTopRatedState, getUpcomingState } from '../app/movieSelector';
import { GetTopRatedMovies, GetUpcomingMovies } from '../app/actions/movieAction';
import MovieList from './MovieList';
import TrendingMovies from '../components/TrendingMovies';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTopRatedMovies());
    dispatch(GetUpcomingMovies());
  }, [dispatch]);

  const topRatedMovies = useSelector(getTopRatedState());
  const upcomingMovies = useSelector(getUpcomingState());
  return (
    <View className="bg-neutral-800 flex-1">
      <SafeAreaView>
        <View className="flex-row justify-between items-center px-4">
          <Icon name="menuunfold" size={30} color="#fff" />
         {/* logo component şeklinde eklendi */}
          <Logo />
          <TouchableOpacity
            onPress={() => navigation.navigate(AppScreens.Search)}>
            <Icon name="search1" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView>
        {/* trending movies */}
        <TrendingMovies />
        {/* upcoming movies */}
        <MovieList title={'Upcoming'} data={upcomingMovies} />
        {/* toprated movies */}
        <MovieList title="Top Rated" data={topRatedMovies} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
