import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  AuthStackParamList,
} from '@routes';


declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

