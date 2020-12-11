import React, { createContext, useState } from 'react'
import auth from '../Services/Verifica_login'

interface AuthContextData {
    signed: Object;
    signIn(email, pass): Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(Object);

    async function signIn(email, pass) {

        const response = await auth(email, pass);
        console.log("Estou passando pela auth")
        console.log(user)
        setUser(response)

    }

    return (<>
        <AuthContext.Provider value={{ signed: user, signIn }}>

            {children}

        </AuthContext.Provider>
    </>)
}

export default AuthContext;
