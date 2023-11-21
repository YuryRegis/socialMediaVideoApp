import {TextInputProps as RNTextInputProps} from 'react-native';
import {BoxProps} from '@components';


export interface TextInputProps extends RNTextInputProps {
  label: string;
  boxProps?: BoxProps;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
}
