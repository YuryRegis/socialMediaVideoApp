import React from 'react';

import { useAuth } from '@context';
import { Button } from '@components';


export function ButtonGoogleSignin() {
    const {googleSignIn, isLoading} = useAuth();
  
    return (
        <Button
            marginTop="s12"
            loading={isLoading}
            onPress={googleSignIn}
            title="Entrar com Google"
        />
    );
};  
