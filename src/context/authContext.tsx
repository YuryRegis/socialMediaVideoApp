import React, {PropsWithChildren, createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';


import {User} from '@domain';
import {googleAuthService} from '@services';
import {AsyncStorageMMKV, authService} from '@services';


export interface AuthData  {
  token?: string;
  user: User;
}

export interface IAuthContextData {
  signIn: (user: string, password: string) => Promise<void>;
  isGoogleSignedIn: () => Promise<boolean>;
  googleSignOut: () => Promise<void>;
  googleSignIn: () => Promise<void>;
  signOut: () => Promise<void>;
  authData?: AuthData;
  isLoading: boolean;
}

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorageMMKV.getString('@AuthData');
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
      Alert.alert('loadStorageData error', 'erro desconhecido');
    } finally {
      setisLoading(false);
    }
  }

  async function googleSignIn(): Promise<void> {
    try {
      setisLoading(true);
      const _authData = await googleAuthService.signIn();
      if (_authData) {
        setAuthData(_authData);
        AsyncStorageMMKV.set('@AuthData', JSON.stringify(_authData));
      } else {
        Alert.alert('googleSignIn', 'no auth data');
      };
    } catch (error) {
      Alert.alert('googleSignIn ao entrar', 'erro desconhecido');
    } finally {
      setisLoading(false);
    }
  };

  async function signIn(user: string, password: string) {
    try {
      setisLoading(true);
      const authData = await authService.signIn(user, password);
      setAuthData(authData);
      AsyncStorageMMKV.set('@AuthData', JSON.stringify(authData));
    } catch (error) {
      Alert.alert('Erro ao entrar', 'erro desconhecido');
    } finally {
      setisLoading(false);
    }
  }

  async function googleSignOut(): Promise<void> {
    try {
      await googleAuthService.signOut();
    } catch (error) {
      Alert.alert('GoogleSignOut error', 'erro desconhecido');
    };
  }; 

  async function signOut() {
    try {
      setisLoading(true);
      setAuthData(undefined);
      AsyncStorageMMKV.delete('@AuthData');
    } catch (error) {
      Alert.alert('Logout error', 'erro desconhecido');
    } finally {
      setisLoading(false);
    };
  }

  async function isGoogleSignedIn(): Promise<boolean> {
    const isSignedIn = await googleAuthService.isSignedIn();
    return isSignedIn;
  };

const values = {
    isGoogleSignedIn,
    googleSignOut,
    googleSignIn,
    isLoading,
    authData,
    signOut,
    signIn,
};

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};
