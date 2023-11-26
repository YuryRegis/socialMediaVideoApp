import {
    User,
    statusCodes,
    GoogleSignin,
} from '@react-native-google-signin/google-signin';


GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
    offlineAccess: false, 
    forceCodeForRefreshToken: true, 
    accountName: '', 
    iosClientId: '1:588714950428:android:384f1902eb48f0e5cc44d9', 
    profileImageSize: 120,
});

export type GoogleUser = User;

export const googleAuth = {
    GoogleSignin,
    statusCodes
};
