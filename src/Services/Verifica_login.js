 import api from "./Api";
import { createStore } from 'redux'

export default async function Verifica_Login(email,pass){
   const response = await api.post('/Login',{"Email":email,"Pass":pass}).then(results => {


      if(Object.keys(results.data)[0] == "Erro"){

            return false;

      }
      if(results.data[0].email == email){


        return {"validacao":true,"user":results.data};
      }

       return null;

     })


    return response

 }


