export {};

jest.mock('react-native-permissions', () => ({
  check: jest.fn(),
  request: jest.fn(),
  PERMISSIONS: {
    ANDROID: {
      READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE',
    },
    IOS: {
      PHOTO_LIBRARY: 'ios.permission.PHOTO_LIBRARY',
    },
  },
  RESULTS: {
    GRANTED: 'granted',
    DENIED: 'denied',
  },
}));

jest.mock('@react-native-google-signin/google-signin', () => ({
  GoogleSignin: {
    configure: jest.fn(),
    signIn: jest.fn(),
    signInSilently: jest.fn(),
    signOut: jest.fn(),
    isSignedIn: jest.fn(),
  },
  statusCodes: {
    SIGN_IN_CANCELLED: 0,
    IN_PROGRESS: 1,
    PLAY_SERVICES_NOT_AVAILABLE: 2,
    SIGN_IN_REQUIRED: 3,
    SIGN_IN_FAILED: 4,
    SIGN_IN_SUCCESS: 5,
  },
}));

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

// @ts-ignore
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets),
}));

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});
