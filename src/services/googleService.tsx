import { Alert } from 'react-native';
import {AuthData, GoogleUser, googleAuth} from '@context';


function googleAdapter(googleUser: GoogleUser): AuthData {
    return {
        token: googleUser.idToken as string,
        user: {
            username: googleUser.user.givenName as string
                + googleUser.user.familyName as string,
            firstName: googleUser.user.givenName as string,
            lastName: googleUser.user.familyName as string,
            profileURL: googleUser.user.photo as string,
            fullName: googleUser.user.name as string,
            
            publishedPostsCount: 0,
            folowersCount: 0,
            folowingCount: 0,

            email: googleUser.user.email,
            id: googleUser.user.id,
            isOnline: true,
        },
    };
};

async function signIn(): Promise<AuthData | null> {
    try {
        const googleUser = await googleAuth.GoogleSignin.signIn();
        console.log('googleUser', googleUser);
        return googleAdapter(googleUser);
    } catch (error) {
        Alert.alert('Erro ao entrar', error?.message);
        return null;
    }
}

async function signOut(): Promise<void> {
    try {
        await googleAuth.GoogleSignin.signOut();
    } catch (error) {
        Alert.alert('Logout error', error?.message);
    };
}

async function isSignedIn(): Promise<boolean> {
    try {
        const isSignedIn = await googleAuth.GoogleSignin.isSignedIn();
        return isSignedIn;
    } catch (error) {
        Alert.alert('Erro ao verificar login Google', error?.message);
        return false;
    };
};

export const googleAuthService = {
  isSignedIn,
  signOut,
  signIn,
};
