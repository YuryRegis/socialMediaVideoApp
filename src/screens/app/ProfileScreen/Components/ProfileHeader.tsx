import React from 'react';

import {Box, BoxProps, Icon, Text, TouchableOpacityBox} from '@components';
import {useAppSafeArea} from '@hooks';
import {authService} from '@domain';

export function ProfileHeader() {
  const {top} = useAppSafeArea();

  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      <Box flexDirection='row'>

        <Text preset='paragraphLarge' bold color='backgroundContrast'>
          Meu
        </Text>

        <Text preset='paragraphLarge' ml='s4' color='backgroundContrast'>
          Perfil
        </Text>
        
      </Box>

      <Box flexDirection="row">
        <TouchableOpacityBox onPress={authService.logout}>
          <Icon size={20} name="logoutIcon" />
        </TouchableOpacityBox>
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};
