import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebaseinit';
import { onAuthStateChanged,createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
export const AuthContext = createContext()
const Authprovider = ({children}) => {
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)

    const userSignup = (email,password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userInfo = (userdata) => {
        return updateProfile(auth.currentUser , userdata)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser || null)
            setLoading(false)
        })
        return unsubcribe
    },[])
    const authInfo = {
        user,setUser,loading,setLoading,userSignup,userInfo
    }
    return <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
};

export default Authprovider;