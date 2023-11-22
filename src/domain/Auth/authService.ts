import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';


async function login(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> {
  try {
    const user = await auth().signInWithEmailAndPassword(email, password);
    console.log('user: ', user);
    return user;
  } catch (error) {
    console.log('error: ', error);
    throw new Error('Erro ao fazer login');
  }
};

async function register(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    throw error;
  }
}

async function logout(): Promise<void> {
  try {
    await auth().signOut();
  } catch (error) {
    throw error;
  }
}

export const authService = {
  login,
  logout,
  register,
};
