import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {AppTabBar} from './AppTabBar';
import {
  ProfileScreen,
  NewPostScreen,
  FavoritesScreen
} from '@screens';
import {AppHomeStack} from './AppHomeStack';

export type AppTabBottomTabParamList = {
  Feed: undefined;
  NewPostScreen: undefined;
  ProfileScreen: undefined;
  FavoritesScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

const renderTabBar = (props: BottomTabBarProps) => <AppTabBar {...props} />;

export const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
    }}>
      <Tab.Screen name="Feed" component={AppHomeStack} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};
