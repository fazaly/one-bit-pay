import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [userDetails, setUserDetails] = useState({});


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    };

    //Loading user data from database for using in multiple components
    useEffect(() => {
        fetch(`https://one-bit-pay-server.vercel.app/user/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setUserDetails(data.data);
            });
    }, [user]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe;
    }, [user]);

    const authInfo = {
        user,
        setUser,
        loading,
        userDetails,
        createUser,
        signIn,
        logOut,
        passwordReset
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;