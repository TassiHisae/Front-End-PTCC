import React from 'react';
import { TouchableOpacity } from 'react-native';
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
} from './styles';
import Back from '../../components/Back';
import Icon from 'react-native-vector-icons/MaterialIcons';
import foto from '../../assets/produto.jpg';
import { useState } from 'react';
function Finalizacao({ navigation }) {
  const [marked, setMarked] = useState(true);

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
            <Value>R$ 9,00</Value>
          </ViewText>
        </Content>
      </SpaceOfFreight>
      <TextTime>Bigodinho Pets</TextTime>
      <SpaceOfOrder>
        <BoxOfOrder>
          <ViewText>
            <TextProd>Ração Golden Carne e Arroz</TextProd>
            <ValueOfProd>R$ 119,90</ValueOfProd>
          </ViewText>
          <Image source={foto} />
        </BoxOfOrder>


        <AddItens>
          <TouchableOpacity onPress={() => navigation.navigate('PetShop')}>
            <TextItens>Adicionar mais itens</TextItens>
          </TouchableOpacity>
        </AddItens>
        <ViewText>
          <ViewSpaceBetween>
            <TextSubTotal>Subtotal</TextSubTotal>
            <TextSubTotal>R$ 239,80</TextSubTotal>
          </ViewSpaceBetween>
          <ViewSpaceBetween>
            <TextSubTotal>Frete</TextSubTotal>
            <TextSubTotal>R$ 9,00</TextSubTotal>
          </ViewSpaceBetween>
          <ViewSpaceBetween>
            <TextTotal>Total</TextTotal>
            <TextTotal>R$ 248,80</TextTotal>
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
                <Text>Cartão de Crédito/Débito</Text>
                <Address>Visa - **** 2080</Address>
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
              <Marked isMarked={marked} onPress={() => setMarked(!marked)} />
            </ViewSpaceBetween>
            <ViewSpaceBetween>
              <TextOption>Débito</TextOption>
              <Marked isMarked={!marked} onPress={() => setMarked(!marked)} />
            </ViewSpaceBetween>
          </ViewText>
        </OptionWallet>
        <Cpf>
          <ViewSpaceBetween>
            <ViewText>
              <Text>CPF/CNPJ na nota</Text>
              <CpfText>55555555578</CpfText>
            </ViewText>
            <Touchable>
              <Icon name="chevron-right" color="#2dc7ff" size={20} />
            </Touchable>
          </ViewSpaceBetween>
        </Cpf>
      </SpaceOfPayment>
      <Button onPress={() => navigation.navigate('Home')}>
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
