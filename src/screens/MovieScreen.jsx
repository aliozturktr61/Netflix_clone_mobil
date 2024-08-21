import {useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {View, Text, ScrollView, Image, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  GetMovieCredits,
  GetMovieDetails,
  GetSimilarMoviesState,
} from '../app/actions/movieAction';
import {
  getMovieCreditState,
  getMovieDetailState,
  getSimilarMoviesState,
} from '../app/movieSelector';
import BackAndFavorite from '../components/BackAndFavorite';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../components/Cast';
import MovieList from './MovieList';

const MovieScreen = () => {
  const {id} = useRoute().params;
  const dispatch = useDispatch();
  const {width, height} = Dimensions.get('window');

  useEffect(() => {
    dispatch(GetMovieDetails(id));
    dispatch(GetMovieCredits(id));
    dispatch(GetSimilarMoviesState(id));
  }, [dispatch, id]);
  const movieDetail = useSelector(getMovieDetailState());
  const movieCredits = useSelector(getMovieCreditState());
  const similarMovies = useSelector(getSimilarMoviesState());

  return (
    <ScrollView className="flex-1 bg-neutral-900 ">
      <BackAndFavorite isAbsolute movie={movieDetail} />
      <View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`,
          }}
          style={{width: width, height: height * 0.55}}
        />
        <LinearGradient
          colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
          style={{
            width: width,
            height: height * 0.4,
          }}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          className="absolute bottom-0"
        />
      </View>
      <View className="space-y-3">
        {/* movie detail */}
        <Text className="text-white text-center font-semibold text-base tracking-wider">
          {movieDetail?.title}
        </Text>
        <Text className="text-neutral-400 text-center font-semibold text-base">
          {movieDetail?.status} | {movieDetail?.release_date?.split('-')[0]} | 
          {movieDetail?.runtime} min
        </Text>
      </View>
      {/* Türler*/}
      <View className="flex-row justify-center my-4">
        {movieDetail?.genres?.map((genre, index) => {
          let shotDot = index + 1 !== movieDetail?.genres?.length;
          return (
            <Text
              key={index}
              className="text-neutral-400 font-semibold text-base">
              {genre.name}
              {shotDot && ' |'}{' '}
            </Text>
          );
        })}
      </View>
      {/* Açıklama */}
      <Text className="text-neutral-400 mx-4 mt-2 tracking-wide">
        {movieDetail?.overview}
      </Text>
      {/* oyuncular*/}
      {movieCredits?.length > 0 && <Cast data={movieCredits} />}
      {/* benzer filimler */}
      {similarMovies?.length > 0 && (
        <MovieList title={'Similar Movies'} data={similarMovies} hideSeeAll />
      )}
    </ScrollView>
  );
};

export default MovieScreen;
