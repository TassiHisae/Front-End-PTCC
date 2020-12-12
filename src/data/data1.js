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

      return results.data;
    });
  },
  function Itens_Pedidos_5(id) {
    return Api.post('/Lista_Produtos_Pedidos', { id: id }).then((results) => {

      return results.data;
    });
  },
  function verifica_Cancel_6(id) {

    return Api.post('/verificaCancel', { id: id }).then((results) => {

      return results.data;
    });
  },

  function Item_Loja_acessorios_7(id) {
    return Api.post('/List_Product_Category', { "idempresa": id, "categoria": "Acessórios" }).then((results) => {


      return results.data;
    });
  },

  function Item_Loja_alimentos_8(id) {
    return Api.post('/List_Product_Category', { "idempresa": id, "categoria": "Alimentos" }).then((results) => {


      return results.data;
    });
  },

  function Item_Loja_saúde_9(id) {
    return Api.post('/List_Product_Category', { "idempresa": id, "categoria": "Saúde" }).then((results) => {


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
  function Comprar_13(total,data_pedido,previsao,empresa_id_pedido,usuario_id_pedido,endereco_usuario_id_pedido,idusuario_pedidos,status,forma_pagamento) {
    return Api.post('/Compra',{"total":total,"data_pedido":data_pedido,"previsao":previsao,"empresa_id_pedido":empresa_id_pedido,"usuario_id_pedido":usuario_id_pedido,"endereco_usuario_id_pedido":endereco_usuario_id_pedido,idusuario_pedidos:idusuario_pedidos,"status":idusuario_pedidos,"status":status,"forma_pagamento":forma_pagamento}).then((results) => {

      return results.data;
    });
  },
  function CadastraPedido_14(valorItem, QtdeItem, IdProduto, IdPedido) {

    return Api.post('/Cadastra_pedido',{valorItem:valorItem,QtdeItem:QtdeItem,IdProduto:IdProduto,IdPedido:IdPedido}).then((results) => {

      return results.data;
    });
  },
  function StatusPedido_15(data_status, pedido_id_status) {

    return Api.post('/status_pedido',{data_status:data_status,pedido_id_status:pedido_id_status}).then((results) => {

      return results.data;
    });
  },

  function StatusPedido_16(id_pedido) {

    return Api.post('/status_entregue',{id_pedido:id_pedido}).then((results) => {

      return results.data;

    });

  },
];
