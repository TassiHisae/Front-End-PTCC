const axios = require('axios');

function Cadastrar(cpf,senha,email,nascimento,nome,telefone,celular){
   const response =  axios.post('http://192.168.15.13:3333/Create_User', {
  "cpf":cpf,
   "senha":senha,
   "email":email,
   "nascimento":nascimento,
   "nome":nome,
   "telefone":telefone,
   "celular":celular
  }).then((results) => {

        console.log(results.data.rowCount)
       return results;

     })

    return response

 }

Cadastrar("47515328757","123","best@teste.com.br","11-12-1999","matheus","7531594423","15975346211")

