import {View, Text, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetTrendingMovies} from '../app/actions/movieAction';
import {getTrendingState} from '../app/movieSelector';
//import Carousel from '../../node_modules/react-native-snap-carousel/src/carousel/Carousel';

export default function TrendingMovies() {
  const dispatch = useDispatch();
  const {width, height} = Dimensions.get('window');

  useEffect(() => {
    dispatch(GetTrendingMovies());
  }, [dispatch]);

  const trendingMovies = useSelector(getTrendingState());

  return (
    <View>
    {/*   <Carousel
        data={trendingMovies}
        renderItem={({item}) => <MovieCard movie={item} />}
        sliderWidth={width}
        itemWidth={width * 0.62}
        firstItem={2}
        inactiveSlideScale={0.6}
      /> */}
      <Text>trend</Text>
    </View>
  );
}