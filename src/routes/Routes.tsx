import React from 'react';
import {NavigationContainer} from '@react-navigation/native';


import {useAuth} from '@context';
import {AuthStack} from './AuthStack';
import {AppTabNavigator} from './AppTabNavigator';

//TODO: implement fix to authCredentials on Android devices
export function Router() {
  const {authData} = useAuth();

  return (
    <NavigationContainer>
      {Boolean(authData) ? <AppTabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};
