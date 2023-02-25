import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackNavigationProps} from '../App';

export type MainStackParamList = {
  Home: undefined;
  Magazine: undefined;
  My: undefined;
};

type NavigationProps<T extends keyof MainStackParamList = 'Home'> =
  NativeStackNavigationProp<MainStackParamList, T>;

export type MainStackNavigationProps<
  T extends keyof MainStackParamList = 'Home',
> = CompositeNavigationProp<
  NavigationProps<T>,
  RootStackNavigationProps<'MainNavigator'>
>;
