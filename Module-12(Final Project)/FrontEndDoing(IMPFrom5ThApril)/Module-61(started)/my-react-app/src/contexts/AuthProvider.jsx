import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from './../configuations/Firebase/FiebaseInit';

const AuthProvider = ({ children }) => {
const provider = new GoogleAuthProvider();
    const registerUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInWithEmailAndPasswordFunction = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth,provider)
    }   //must return something
    const authInfo = {
        signInWithEmailAndPasswordFunction,
        registerUser, signInWithGoogle, signInWithEmailAndPassword
    }
    return (
        <AuthContext value={authInfo}>
{children}
        </AuthContext>
    );
};

export default AuthProvider;