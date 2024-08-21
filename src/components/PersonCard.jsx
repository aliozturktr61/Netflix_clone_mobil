import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import MovieList from '../screens/MovieList';

const PersonCard = ({person, personMovies}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <View className="items-center mt-3">
      <View className="w-72 h-72 items-center rounded-full overflow-hidden border-neutral-500 border-2">
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${person.profile_path}`,
          }}
          style={{
            width: width * 0.74,
            height: height * 0.38,
          }}
        />
      </View>

      <View className="mt-6">
        <Text className="text-white text-3xl font-bold text-center">
          {person?.name}
        </Text>
        <Text className="text-neutral-500 text-center text-sm">
          {person?.place_of_birth?.length > 20 ? (
            <Text>{person?.place_of_birth?.slice(0, 20) + '...'}</Text>
          ) : (
            person?.place_of_birth
          )}
        </Text>
      </View>

      <View className="bg-neutral-700 rounded-full p-4 mt-6 flex-row justify-between">
        <View className="border-r-2 items-center border-r-neutral-400 px-2">
          <Text className="text-white font-semibold">Gender</Text>
          <Text className="text-neutral-300">
            {person?.gender === 1 ? 'Female' : 'Male'}
          </Text>
        </View>
        <View className="border-r-2 items-center border-r-neutral-400 px-2">
          <Text className="text-white font-semibold">Birthday</Text>
          <Text className="text-neutral-300">{person.birthday}</Text>
        </View>
        <View className="border-r-2 items-center border-r-neutral-400 px-2">
          <Text className="text-white font-semibold">Known For</Text>
          <Text className="text-neutral-300">
            {person?.known_for_department}
          </Text>
        </View>
        <View className="items-center  px-2">
          <Text className="text-white font-semibold">Popularity</Text>
          <Text className="text-neutral-300">
            {person?.popularity?.toFixed(2)} %
          </Text>
        </View>
      </View>

      <View className="my-6 mx-4 space-y-2">
        <Text className="text-white text-lg text-center">Biography</Text>
        <Text className="text-neutral-400 tracking-wide">
          {person?.biography || 'No biography found'}
        </Text>
      </View>

      <MovieList data={personMovies} title={'Movies'} />
    </View>
  );
};
export default PersonCard;
