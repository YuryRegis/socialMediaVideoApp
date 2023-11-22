import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {useAuthCredentials} from '@services';
import {Screen, ActivityIndicator} from '@components';

//TODO: implement fix to authCredentials on Android devices
export function Router() {
  const {authCredentials, loading} = useAuthCredentials();

  function LoadingScreen() {
    return (
      <Screen flex={1} justifyContent='center' alignItems='center'>
          <ActivityIndicator size='large' color='backgroundContrast'/>
      </Screen>
    );
  };

  return (
    <NavigationContainer>
      {/* {loading ? <LoadingScreen/> : (
        Boolean(authCredentials) ? <AppStack /> : <AuthStack />
      )} */}
      {Boolean(authCredentials) ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
