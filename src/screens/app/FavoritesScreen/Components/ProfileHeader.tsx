import React from 'react';

import {Box, BoxProps, Text} from '@components';

export function FavoritesHeader() {

  return (
    <Box {...$wrapper}>
      <Box flexDirection='row'>

        <Text preset='paragraphLarge' bold color='backgroundContrast'>
          Meus
        </Text>

        <Text preset='paragraphLarge' ml='s4' color='backgroundContrast'>
          Favoritos
        </Text>
        
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};
