import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen, SignUpScreen, ForgotScreen} from '@screens';

export type AuthStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  ForgotScreen: undefined;
};
const Stack = createNativeStackNavigator<AuthStackParamList>();


export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
    </Stack.Navigator>
  );
};

