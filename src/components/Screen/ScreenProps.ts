import {BoxProps} from '../Box';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}
