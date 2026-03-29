import React from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthCotext';
import { use } from 'react';

const useAuth = () => {
    const authInfo = use(AuthContext)
    return authInfo
};

export default useAuth;