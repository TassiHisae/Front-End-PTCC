import Api from '../Services/Api';

export default [
  function Avaliacao_0() {
    return Api.post('/List_Lojas').then((results) => {
      return results.data;
    });
  },
  function Lojas_1() {
    return Api.post('/List_Lojas').then((results) => {
      return results.data;
    });
  },
  function Produtos_2() {
    return Api.post('/List_Produtos').then((results) => {
      return results.data;
    });
  },
  function Pedidos_3(status) {
    return Api.post('/List_Pedidos').then((results) => {
      return results.data.filter((result) => {
        return result.status === status;
      });
    });
  },
  function Itens_Pedidos_4(id) {
    return Api.post('/Lista_Produtos_Pedidos', { id: id }).then((results) => {
      /* console.log("TESTE"+results.data.filter("status")==="ativo")*/
      return results.data;
    });
  },
  function Itens_Pedidos_5(id) {
    return Api.post('/Lista_Produtos_Pedidos', { id: id }).then((results) => {
      /* console.log("TESTE"+results.data.filter("status")==="ativo")*/
      return results.data;
    });
  },
  function verifica_Cancel_6(id) {
    console.log("ID" + id)
    return Api.post('/verificaCancel', { id: id }).then((results) => {
      /* console.log("TESTE"+results.data.filter("status")==="ativo")*/

      return results.data;
    });
  },

  function Item_Loja_acessorios_7(id, categoria) {
    return Api.post('/List_Product_Category', { "idempresa": id, "categoria": categoria }).then((results) => {
      /* console.log("TESTE"+results.data.filter("status")==="ativo")*/

      return results.data;
    });
  },
  function Item_Loja_Alimento_8(id) {
    return Api.post('/empresa_produto', { id: id, tela: "Alimentos" }).then((results) => {
      /* console.log("TESTE"+results.data.filter("status")==="ativo")*/
      /*     console.log("teste")
          console.log(results) */
      return results.data;
    });
  },
  function Item_Loja_saude_9(id) {
    return Api.post('/empresa_produto', { id: id, tela: "Saúde" }).then((results) => {
      /* console.log("TESTE"+results.data.filter("status")==="ativo")*/
      ;
      return results.data;
    });
  },
  function Filtro_Pesquisa_10(campo, busca) {
    return Api.post('/Search_Filter', { "campo": campo, "busca": busca }).then((results) => {
      return results.data;
    });
  },
  function Filtro_Pesquisa_Empresa_11(busca) {
    return Api.post('/Search_Filter_Company', { "busca": busca }).then((results) => {
      return results.data;
    });
  },
];
