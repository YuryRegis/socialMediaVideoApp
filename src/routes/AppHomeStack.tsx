import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Post} from '@domain';
import {HomeScreen, PostScreen} from '@screens';


export type AppHomeStackParamList = {
    HomeScreen: undefined;
    PostScreen: {post: Post};
};

const Stack = createNativeStackNavigator<AppHomeStackParamList>();

export function AppHomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  );
};
