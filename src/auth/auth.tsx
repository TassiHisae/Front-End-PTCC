import React, { createContext,useState } from 'react'
import  auth  from '../Services/Verifica_login'

interface AuthContextData{
    signed:Object;
    signIn(): Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);
export const AuthProvider = ({ children }) => {

    const [user,setUser] = useState();

       async function signIn(email,pass){

           const response = await auth(email,pass);

           setUser(response)

       }

    return (<>
        <AuthContext.Provider value={{signed:user,signIn}}>

            {children}

        </AuthContext.Provider>
    </>)
}

export default AuthContext;
