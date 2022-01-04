/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import UserAnalyzer_Page from "./screens/UserAnalyzer_Page";
import EditUserAnalyzer_Page from "./screens/EditUserAnalyzer_Page";
import Filter_People_Page from "./screens/Filter_People_Page";
import Login_with_Phone from "./screens/Login_with_Phone";
import VerifyOTP from "./screens/VerifyOTP";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  UserAnalyzer_Page: undefined;
  NotFound: undefined;
  EditUserAnalyzer_Page: undefined;
  Filter_People_Page: undefined;
  SplashScreen: undefined;
  SecondPage_WithNavigation: undefined;
  HomeCategories: undefined;
  Login_with_Phone: undefined;
  VerifyOTP:undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
