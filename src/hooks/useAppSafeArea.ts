import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppTheme} from './useAppTheme';


export function useAppSafeArea() {
  const {top, bottom} = useSafeAreaInsets();
  const {spacing} = useAppTheme();

  return {
    defaultTop: top,
    defaultBottom: bottom,
    
    top: Math.max(top, spacing.s20),
    bottom: Math.max(bottom, spacing.s20),
  };
};
