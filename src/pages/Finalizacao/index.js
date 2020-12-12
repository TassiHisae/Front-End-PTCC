import React, { useContext,useState,useEffect } from 'react';

import { TouchableOpacity } from 'react-native';

import CompraContext from '../../data/Loja/DataCarrinho'

import ListPedido from "../../components/ListCompras/ItemCompra";

import { List } from './styles'

import Lista from '../Alimentos/ItensList'

import { moedaMask } from '../../Mascara/mask';

import data  from '../../data/data1'

import AuthContext from '../../auth/auth'

import {
  Container,
  SpaceOfAddress,
  Box,
  Content,
  Text,
  TextTime,
  Touchable,
  ViewText,
  Address,
  SpaceOfFreight,
  TypeOfFreight,
  Time,
  Value,
  SpaceOfOrder,
  BoxOfOrder,
  TextProd,
  ValueOfProd,
  Image,
  AddItens,
  TextItens,
  TextSubTotal,
  ViewSpaceBetween,
  TextTotal,
  SpaceOfPayment,
  OptionWallet,
  TextOption,
  Marked,
  Cpf,
  CpfText,
  Button,
  TextButton,
  CardBall,
  CardBackground,
}

  from './styles';
import Back from '../../components/Back';
import Icon from 'react-native-vector-icons/MaterialIcons';
import foto from '../../assets/produto.jpg';



function Finalizacao({ navigation }) {

  const [marked, setMarked] = useState(false);

  const [marked1, setMarked1] = useState(false);

  const [marked2, setMarked2] = useState(false);

  const [marked3, setMarked3] = useState(false);

  const [pagamento,setPagamento] = useState("Crédito")

  const [Pedido_id_resultado,SetPedido_id_resultado] = useState()

  const { ItensCompra } = useContext(CompraContext);

  const { total, frete } = useContext(CompraContext);

  const { signed, signIn } = useContext(AuthContext)

   const [idDoPedido,setIdDoPedio] = useState();


  function verifica1() {
    setMarked1(true)
    setMarked2(false)
    setMarked3(false)
    setPagamento("Crédito")
  }

  function verifica2() {
    setMarked1(false)
    setMarked2(true)
    setMarked3(false)
    setPagamento("Débito")
  }

  function verifica3() {
    setMarked1(false)
    setMarked2(false)
    setMarked3(true)
    setPagamento("Dinheiro")
  }

  function Comprar(){

    var dNow = new Date();

       const data_pedido = dNow.getFullYear()+ "-" + (dNow.getMonth()+1) + "-" + dNow.getDate();
       const data_previsao =  dNow.getFullYear()+ "-" + (dNow.getMonth()+1) + "-" + (dNow.getDate()+7);
       const idempresa = navigation.state.params.idempresa;
       const idusuario = signed.user[0].idusuario;
       const endereco = 1;
       const idusuario_pedido = idusuario;
       const status = 1;
       const total_tudo = (parseInt(frete) + parseInt(total))

       data[13](total_tudo,data_pedido,data_previsao,idempresa,idusuario,endereco,idusuario_pedido,status,pagamento).then((results) => {

          SetPedido_id_resultado(results)

                 return results
        })

        ItensCompra.forEach(element => {

           data[14](element.valor,element.qtde,element.id,idDoPedido)

       });

       navigation.navigate('Home')

  }


  return (
    <Container>
      <SpaceOfAddress>
        <Content>
          <Box>
            <Icon name="gps-fixed" color="#000" size={25} />
          </Box>
          <ViewText>
            <Text>Rua Padre Cícero, 134</Text>
            <Address>Jd. Saint Morritz</Address>
          </ViewText>
        </Content>
        <Touchable onPress={() => navigation.navigate('Endereco')}>
          <Icon name="chevron-right" color="#2dc7ff" size={20} />
        </Touchable>
      </SpaceOfAddress>
      <TextTime>Hoje, 76 - 95 min</TextTime>
      <SpaceOfFreight>
        <Content>
          <ViewText>
            <TypeOfFreight>Padrão</TypeOfFreight>
            <Time>Hoje, 76 - 95 min</Time>
            <Value>R${}</Value>
          </ViewText>
        </Content>
      </SpaceOfFreight>
      <TextTime>Bigodinho Pets</TextTime>
      <SpaceOfOrder>
        <Container>
          <List
            data={ItensCompra}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <ListPedido item={item} />}
          />
        </Container>
        <AddItens>
          <TouchableOpacity onPress={() => navigation.navigate('PetShop')}>
            <TextItens>Adicionar mais itens</TextItens>
          </TouchableOpacity>
        </AddItens>
        <ViewText>
          <ViewSpaceBetween>
            <TextSubTotal>Subtotal</TextSubTotal>
            <TextSubTotal>R$ {moedaMask("'" + total + "'")}</TextSubTotal>
          </ViewSpaceBetween>
          <ViewSpaceBetween>
            <TextSubTotal>Frete</TextSubTotal>
            <TextSubTotal>R$ {moedaMask("'" + frete + "'")}</TextSubTotal>
          </ViewSpaceBetween>
          <ViewSpaceBetween>
            <TextTotal>Total</TextTotal>
            <TextTotal>R$ {moedaMask("'" + (parseInt(frete) + parseInt(total)) + "'")}</TextTotal>
          </ViewSpaceBetween>
        </ViewText>
      </SpaceOfOrder>
      <TextTime>Pagamentos</TextTime>
      <SpaceOfPayment>
        <Content>
          <ViewSpaceBetween>
            <Content>
              <Box>
                <CardBackground>
                  <CardBall color="rgba(236,1,1,0.9)"></CardBall>
                  <CardBall color="rgba(255,211,29,0.9)" second></CardBall>
                </CardBackground>
              </Box>
              <ViewText>
                <Text>Forma de Pagamento de Entrega</Text>
                <Address>selecione o tipo de pagamento</Address>
              </ViewText>
            </Content>
            <Touchable>
              <Icon name="chevron-right" color="#2dc7ff" size={20} />
            </Touchable>
          </ViewSpaceBetween>
        </Content>
        <OptionWallet>
          <ViewText>
            <ViewSpaceBetween>
              <TextOption>Crédito</TextOption>
              <Marked isMarked={marked1} onPress={verifica1} />
            </ViewSpaceBetween>
            <ViewSpaceBetween>
              <TextOption>Débito</TextOption>
              <Marked isMarked={marked2} onPress={verifica2} />
            </ViewSpaceBetween>
            <ViewSpaceBetween>
              <TextOption>Dinheiro</TextOption>
              <Marked isMarked={marked3} onPress={verifica3} />
            </ViewSpaceBetween>
          </ViewText>
        </OptionWallet>
        <Cpf>
          <ViewSpaceBetween>
            <Touchable>
              <Icon name="chevron-right" color="#2dc7ff" size={20} />
            </Touchable>
          </ViewSpaceBetween>
        </Cpf>

      </SpaceOfPayment>
      <Button onPress={Comprar}>
        <TextButton >Finalizar</TextButton>
      </Button>
    </Container>
  );
}

Finalizacao.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Carrinho',
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: { height: 0, width: 0 },
  },
  headerLeft: () => (
    <Back onPress={() => navigation.navigate('Home')} color="#f76abc" />
  ),
});

export default Finalizacao;
