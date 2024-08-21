import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppScreens} from './types';
import {StackNavigation} from './stackNavigation';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Fontisto';
const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#d9d9d9',
        tabBarInactiveTintColor: '#8c8c8c',
        tabBarStyle: {
          backgroundColor: '#404040',
          paddingVertical: 13,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name={AppScreens.Tab}
        component={StackNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
        name={AppScreens.Favorites}
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  );
};