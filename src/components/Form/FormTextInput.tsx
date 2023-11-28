import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {TextInput} from '../TextInput';
import {TextInputProps} from '../TextInput/TextInputProps';


export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message || errorMessage}
          {...textInputProps}
        />
      )}
    />
  );
};
