import React from 'react';

import {Box, BoxProps, Text} from '@components';

export function NewPostHeader() {

  return (
    <Box {...$wrapper}>
      <Box flexDirection='row'>

        <Text preset='paragraphLarge' bold color='backgroundContrast'>
          Criar
        </Text>

        <Text preset='paragraphLarge' ml='s4' color='backgroundContrast'>
          Postagem
        </Text>
        
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};
