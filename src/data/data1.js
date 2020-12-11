import Api from '../Services/Api';


export default [
  function Avaliacao_0() {
    return Api.get('/Partnerships').then((results) => {
      return results.data;
    });
  },
  function Lojas_1() {
    return Api.post('/Company_all').then((results) => {
      return results.data;
    });
  },
  function Produtos_2() {
    return Api.post('/List_Product_Category_All').then((results) => {
      return results.data;
    });
  },
  function Pedidos_3(id) {
    return Api.post('/List_Pedidos', { id: "idusuario = " + id }).then((results) => {
      return results.data;
    });
  },
  function Itens_Pedidos_4(id) {
    return Api.post('/Order_Details', { id: id }).then((results) => {
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

  function Item_Loja_acessorios_7(id) {
    return Api.post('/List_Product_Category', { "idempresa": id, "categoria": "Acessórios" }).then((results) => {
      /* console.log("TESTE"+results.data.filter("status")==="ativo")*/

      return results.data;
    });
  },

  function Item_Loja_alimentos_8(id) {
    return Api.post('/List_Product_Category', { "idempresa": id, "categoria": "Alimentos" }).then((results) => {
      /* console.log("TESTE"+results.data.filter("status")==="ativo")*/

      return results.data;
    });
  },

  function Item_Loja_saúde_9(id) {
    return Api.post('/List_Product_Category', { "idempresa": id, "categoria": "Saúde" }).then((results) => {
      /* console.log("TESTE"+results.data.filter("status")==="ativo")*/

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
  function Pedidos_12() {
    return Api.post('/List_Pedidos_Inativos', { id: "idusuario = 7" }).then((results) => {
      return results.data;
    });
  },
];
