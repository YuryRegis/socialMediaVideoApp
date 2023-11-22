import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {useAuthCredentials} from '@services';


export function Router() {
  const {authCredentials, loading} = useAuthCredentials();

  if (loading) {
    // TODO: Add a loading screen
    return null;
  };

  return (
    <NavigationContainer>
      {Boolean(authCredentials) ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
