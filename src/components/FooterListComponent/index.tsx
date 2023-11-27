import React from 'react';
import {ActivityIndicator, Box} from '@components';


interface IFooterListComponent {
    isLoading: boolean,
};

export function FooterListComponent({isLoading}: IFooterListComponent) {
    
    return (
      <Box paddingBottom="s24">
        {isLoading && <ActivityIndicator color="gray2" size="large"/>}
      </Box>
    );
  }
