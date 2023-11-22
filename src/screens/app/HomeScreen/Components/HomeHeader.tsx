import React from 'react';

import {Box, BoxProps, Icon, Text, TouchableOpacityBox} from '@components';
import {useAppSafeArea} from '@hooks';


export function HomeHeader() {
  const {top} = useAppSafeArea();

  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      <Box flexDirection='row'>
        <Text preset='paragraphLarge' bold color='backgroundContrast'>
          Meu
        </Text>
        <Text preset='paragraphLarge' ml='s4' color='backgroundContrast'>
          Feed
        </Text>
      </Box>
      <Box flexDirection="row">
        <TouchableOpacityBox >
          <Icon name="search" />
        </TouchableOpacityBox>
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  
  paddingBottom: 's24',
  paddingHorizontal: 's24',
};
