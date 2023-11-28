import React from 'react';
import {Platform} from 'react-native';

import {Box} from '../Box';
import {ActivityIndicator} from "../ActivityIndicator";


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
