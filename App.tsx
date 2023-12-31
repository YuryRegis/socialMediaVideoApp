import React, { useEffect } from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {theme} from '@theme';
import {Router} from '@routes';
import {permissionService} from '@services';
import {AuthProvider} from './src/context/authContext';


const queryClient = new QueryClient();

export const App = () => {

  useEffect(() => {
    permissionService.checkPermission();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
