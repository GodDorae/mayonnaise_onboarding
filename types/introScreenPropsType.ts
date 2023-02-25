import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackNavigationProps} from '../App';

export type IntroStackParamList = {
  OnBoarding: undefined;
  CheckboxForAgreement: undefined;
  AgreementDetail: {
    property: string;
    number: number;
    title: string;
  };
  Nickname: undefined;
  RegionPreference: undefined;
  ObjPreference: undefined;
  WorkspacePreference: undefined;
};

type NavigationProps<T extends keyof IntroStackParamList = 'OnBoarding'> =
  NativeStackNavigationProp<IntroStackParamList, T>;

export type IntroStackNavigationProps<
  T extends keyof IntroStackParamList = 'OnBoarding',
> = CompositeNavigationProp<
  NavigationProps<T>,
  RootStackNavigationProps<'IntroNavigator'>
>;

// export type OnBoardingProps = NativeStackScreenProps<
//   IntroStackParamList,
//   'OnBoarding'
// >;

// export type CheckboxAgreementProps = NativeStackScreenProps<
//   IntroStackParamList,
//   'CheckboxForAgreement'
// >;

// export type AgreementDetailProps = NativeStackScreenProps<
//   IntroStackParamList,
//   'AgreementDetail'
// >;

// export type NicknameProps = NativeStackScreenProps<
//   IntroStackParamList,
//   'Nickname'
// >;

// export type RegionPreferenceProps = NativeStackScreenProps<
//   IntroStackParamList,
//   'RegionPreference'
// >;

// export type ObjPreferenceProps = NativeStackScreenProps<
//   IntroStackParamList,
//   'ObjPreference'
// >;

// export type WorkspacePreferenceProps = NativeStackScreenProps<
//   IntroStackParamList,
//   'WorkspacePreference'
// >;
