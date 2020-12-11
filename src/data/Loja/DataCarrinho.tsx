import React, { createContext, useState } from 'react'

interface AuthContextData {
  ItensCompra: Object[];
  GetObeject(id, nome, valor, url, qtde, frete): Object;
  AlterarObeject(id, qtde): Object
  Total: string
  frete
}

const CompraContext = createContext({} as AuthContextData);
export const CompraProvider = ({ children }) => {

  const [compras, setCompra] = useState([]);

  const [total, settotal] = useState(0);

  const [frete, SetFrete] = useState(0);

  function GetObeject(id, nome, valor, url, qtde, frete) {

    const compra = {

      id: id,

      nome: nome,

      valor: valor,

      url: url,

      qtde: qtde,

      frete: frete

    }
    console.log(frete)
    console.log(frete)


    SetFrete(compra.frete)

    compras.push(compra)

    setCompra(compras)

    Total()

    return compras

  }

  function AlterarObeject(id, qtde) {

    compras.forEach(element => {

      if (element.id == id) {

        element.qtde = qtde

      }

    });

    setCompra(compras)

    Total()

    return compras
  }

  function Total() {

    var resultado = 0;

    const resul = compras.forEach(element => {

      const a = element.valor * element.qtde


      resultado += a;

    });

    settotal(resultado)

  }



  return (<>
    <CompraContext.Provider value={{ ItensCompra: compras, GetObeject, AlterarObeject, total, frete }}>

      {children}

    </CompraContext.Provider>
  </>)
}

export default CompraContext;
