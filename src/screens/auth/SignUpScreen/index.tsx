import React from 'react';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {
  FormPasswordInput,
  FormTextInput,
  Button,
  Screen,
  Text,
} from '@components';
import {AuthScreenProps} from '@routes';

import {SignUpSchema, signUpSchema} from './signUpSchema';

const defaultValues: SignUpSchema = {
  email: '',
  password: '',
  username: '',
  lastName: '',
  firstName: '',
};

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {

  const {control, formState, handleSubmit, watch, getFieldState} =
    useForm<SignUpSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues,
      mode: 'onChange',
    });

  const submitForm = (formValues: SignUpSchema) => {};

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>
      <FormTextInput
        label="Seu username"
        placeholder="@"
        boxProps={{marginBottom: 's20'}}
        control={control}
        name="username"
      />

      <FormTextInput
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{marginBottom: 's20'}}
        autoCapitalize="words"
        control={control}
        name="firstName"
      />

      <FormTextInput
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{marginBottom: 's20'}}
        autoCapitalize="words"
        control={control}
        name="lastName"
      />

      <FormTextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 's20'}}
        control={control}
        name="email"
      />

      <FormPasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{marginBottom: 's48'}}
        control={control}
        name="password"
      />

      <Button
        loading={false}
        title="Criar minha conta"
        onPress={handleSubmit(submitForm)}
        disabled={
          !formState.isValid
        }
      />
    </Screen>
  );
};
