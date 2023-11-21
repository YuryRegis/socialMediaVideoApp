import React from 'react';

import {
    Text,
    Button,
    Screen,
    TextInput,
    PasswordInput,
} from '@components';
import {AuthScreenProps} from '@routes';


export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge" marginBottom="s8">
        Olá!
      </Text>
      <Text preset="paragraphLarge" marginBottom="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{marginBottom: 's10'}}
      />
      <Text
        onPress={()=>{}}
        preset="paragraphSmall"
        bold
        color="primary">
        Esqueci minha senha
      </Text>
      <Button
        title="Entrar"
        marginTop="s48"
        onPress={()=>{}}
      />
      <Button
        preset="outline"
        title="Criar conta"
        marginTop="s12"
        onPress={()=>{}}
      />
      <Button
        title="Entrar com Google"
        marginTop="s12"
        onPress={()=>{}}
      />
    </Screen>
  );
};
