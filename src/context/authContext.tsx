import React, {PropsWithChildren, createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';

import {User} from '@domain';
import {AsyncStorageMMKV, authService} from '@services';


export interface AuthData  {
  token: string;
  user: User;
}

export interface IAuthContextData {
  signIn: (user: string, password: string) => Promise<void>;
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
      Alert.alert('load storage data', error?.message);
    } finally {
      setisLoading(false);
    }
  }

  async function signIn(user: string, password: string) {
    try {
      setisLoading(true);
      const authData = await authService.signIn(user, password);
      setAuthData(authData);
      AsyncStorageMMKV.set('@AuthData', JSON.stringify(authData));
    } catch (error) {
      Alert.alert('Erro ao entrar', error?.message);
    } finally {
      setisLoading(false);
    }
  }

  async function signOut() {
    try {
      setisLoading(true);
      setAuthData(undefined);
      AsyncStorageMMKV.delete('@AuthData');
    } catch (error) {
      Alert.alert('Logout error', error?.message);
    } finally {
      setisLoading(false);
    };
  }

  return (
    <AuthContext.Provider value={{authData, signIn, signOut, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};
