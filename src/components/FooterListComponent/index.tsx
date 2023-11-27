import React from 'react';
import {ActivityIndicator, Box} from '@components';


interface IFooterListComponent {
    postList: any[],
    isLoading: boolean,
};

export function FooterListComponent({postList, isLoading}: IFooterListComponent) {
    const shouldRender = (postList.length === 0) || isLoading;
    
    return (
      <Box paddingBottom="s24">
        {shouldRender && <ActivityIndicator color="gray2" size="large"/>}
      </Box>
    );
  }
