import React from 'react'
import { getLocalStorage } from '../utils/localStorage';
import { useState , createContext , useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [user, setUserData] = useState(null);

   useEffect(() => {
    const {employees, admin} = getLocalStorage()
   setUserData({employees , admin})
   }, [])


  return (
    <div>
        <AuthContext.Provider value={userData}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider