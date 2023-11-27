import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AuthStackParamList} from './AuthStack';
import {AppHomeStackParamList} from './AppHomeStack';


declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppHomeStackParamList> =
  NativeStackScreenProps<AppHomeStackParamList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;
