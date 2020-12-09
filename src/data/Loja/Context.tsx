import React, { createContext,useState } from 'react'


interface AuthContextData{
  IdLoja:Object;
    GetId(id): void;
}

const LojaContext = createContext({} as AuthContextData);
export const LojaProvider = ({ children }) => {

    const [idLoja,setidLoja] = useState();

       async function GetId(id){

        setidLoja(id)

       }

    return (<>
        <LojaContext.Provider value={{IdLoja:idLoja,GetId}}>

            {children}

        </LojaContext.Provider>
    </>)
}

export default LojaContext;
