import {Image} from 'react-native';

const Logo = () => {
  return (
    <Image
      style={{width: 200, height: 50}}
      source={{
        uri: 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
      }}
    />
  );
};

export default Logo;