import React from 'react';
import {ActivityIndicator, Box} from '@components';
import { Platform } from 'react-native';


interface IFooterListComponent {
    isLoading: boolean,
};

export function FooterListComponent({isLoading}: IFooterListComponent) {
    
  return (
    <Box marginBottom="s48">
      {(isLoading && (Platform.OS === 'ios')) && 
        <ActivityIndicator color="gray2" size="large"/>
      }
    </Box>
  );
};
