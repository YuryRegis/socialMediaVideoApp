import {IconProps} from '@components';
import {AppTabBottomTabParamList} from './AppTabNavigator';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  Feed: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  NewPostScreen: {
    label: 'Novo post',
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
  },
  FavoritesScreen: {
    label: 'Favoritos',
    icon: {
      focused: 'bookmarkFill',
      unfocused: 'bookmark',
    },
  },
  ProfileScreen: {
    label: 'Meu perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
};
