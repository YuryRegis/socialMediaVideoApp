import React, {useEffect, useState} from "react";
import auth, {FirebaseAuthTypes} from "@react-native-firebase/auth";

export function useAuthCredentials() {
    const [authCredentials, setAuthCredentials] = useState<FirebaseAuthTypes.User | null>(null);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((userCredentials) => {
            setAuthCredentials(userCredentials);
        });
        return unsubscribe();
    }, []);

    return authCredentials;
};
