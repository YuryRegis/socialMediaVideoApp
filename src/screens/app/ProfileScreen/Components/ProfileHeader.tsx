import React from 'react';

import {useAuth} from '@context';
import {Box, BoxProps, Icon, Text, TouchableOpacityBox} from '@components';


export function ProfileHeader() {
  const {signOut} = useAuth();

  return (
    <Box {...$wrapper}>
      <Box flexDirection='row'>

        <Text preset='paragraphLarge' bold color='backgroundContrast'>
          Meu
        </Text>

        <Text preset='paragraphLarge' ml='s4' color='backgroundContrast'>
          Perfil
        </Text>
        
      </Box>

      <Box flexDirection="row">
        <TouchableOpacityBox onPress={signOut}>
          <Icon size={20} name="logoutIcon" />
        </TouchableOpacityBox>
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  padding: 's16',
  flexDirection: 'row',
  justifyContent: 'space-between',
};
