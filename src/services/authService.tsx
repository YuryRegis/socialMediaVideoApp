import {userMock} from '@domain';
import {AuthData} from '@context';


const signIn = (user: string, password: string): Promise<AuthData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === '123' && user === 'user@mail.com') {
        resolve({
          token: JWTTokenMock,
          user: userMock,
        });
      } else {
        reject(new Error('credenciais incorretas'));
      }
    }, 1500);
  });
};

export const authService = {
  signIn,
};

const JWTTokenMock =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64';
