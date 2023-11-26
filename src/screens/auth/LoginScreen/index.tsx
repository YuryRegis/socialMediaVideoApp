import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';


import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {useAuth} from '@context';
import {AuthScreenProps} from '@routes';
import {LoginSchema, loginSchema} from './loginSchema';
import { ButtonGoogleSignin } from './componentes/ButtonGoogleSignin';
import { Platform } from 'react-native';


export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {signIn} = useAuth();
  
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginSchema) {
    console.log('submitForm', email, password);
    signIn(email, password)
      .then(() => {console.log('user logado')})
      .catch((error) => {console.log(error)});
  };

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  };
  
  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotScreen');
  };

  return (
    <Screen>
      <Text preset="headingLarge" marginBottom="s8">
        Olá!
      </Text>

      <Text preset="paragraphLarge" marginBottom="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 's20'}}
        control={control}
        name="email"
        rules={{
          required: 'E-mail é obrigatório',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'E-mail inválido',
          },
        }}
      />

      <FormPasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{marginBottom: 's10'}}
        control={control}
        name="password"
        rules={{
          required: 'Senha é obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
      />

      <Text
        bold
        color="primary"
        preset="paragraphSmall"
        onPress={navigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button
        title="Entrar"
        marginTop="s48"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />

      <Button
        marginTop="s12"
        preset="outline"
        title="Criar conta"
        onPress={navigateToSignUpScreen}
      />

      {(Platform.OS === 'android') && <ButtonGoogleSignin />}

    </Screen>
  );
};
