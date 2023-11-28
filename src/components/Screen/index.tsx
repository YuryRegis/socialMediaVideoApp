import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {Box} from '../Box';
import {ScreenProps} from './ScreenProps';
import {useAppSafeArea, useAppTheme} from '@hooks';
import {ScreenHeader, ScrollViewContainer, ViewContainer} from './components';


export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  title = '',
  style,
  ...boxProps
}: ScreenProps) {
  const {colors} = useAppTheme();
  const {top, bottom} = useAppSafeArea();
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView behavior={behavior} style={{flex: 1}}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          <ScreenHeader canGoBack={canGoBack} title={title} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
};
