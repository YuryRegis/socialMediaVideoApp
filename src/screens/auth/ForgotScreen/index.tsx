import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {AuthScreenProps} from '@routes';
import {Button, FormTextInput, Screen, Text} from '@components';


import {
  ForgotPasswordSchemaProps,
  forgotPasswordSchema,
} from './forgotPasswordSchema';


export function ForgotScreen({}: AuthScreenProps<'ForgotScreen'>) {

    const {control, formState, handleSubmit} = useForm<ForgotPasswordSchemaProps>({
      resolver: zodResolver(forgotPasswordSchema),
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
    });

    const submitForm = (values: ForgotPasswordSchemaProps) => {};

    return (
      <Screen canGoBack scrollable>
        <Text preset="headingLarge" marginBottom="s16">
          Esqueci minha senha
        </Text>

        <Text preset="paragraphLarge" marginBottom="s32">
          Digite seu e-mail e enviaremos as instruções para redefinição de senha
        </Text>

        <FormTextInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{marginBottom: 's40'}}
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

        <Button
          loading={false}
          title="Recuperar senha"
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
        />
      </Screen>
    );
  };
