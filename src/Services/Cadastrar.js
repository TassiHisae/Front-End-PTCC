import api from "./Api";

export default async function Cadastrar(cpf,senha,email,nascimento,nome,telefone,celular){
   const response = await api.post('/Create_User', {
  "cpf":cpf,
   "senha":senha,
   "email":email,
   "nascimento":nascimento,
   "nome":nome,
   "telefone":telefone,
   "celular":celular
  }).then(results => {


       return results.data.rowCount;

     })

    return response

 }


