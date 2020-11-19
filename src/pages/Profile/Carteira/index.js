import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  OpenQR,
  Top,
  Saldo,
  Title,
  Value,
  Text,
  TextQR,
  Center,
  TextButton,
  Button,
  Bottom,
  Card,
  Conta,
  Cards,
  Numero,
  IconSpace,
  CardBackground,
  CardBall,
} from './styles';
import IconQR from 'react-native-vector-icons/AntDesign';
import IconCard from 'react-native-vector-icons/MaterialCommunityIcons';
import Back from '../../../components/Back';

function Carteira() {
  return (
    <Container>
      <Top>
        <Saldo>
          <Title>Seu saldo da carteira</Title>
          <Value>
            <Text>R$ 00,00</Text>
            <TouchableOpacity>
              <Icon name="chevron-right" color="#2dc7ff" size={20} />
            </TouchableOpacity>
          </Value>
        </Saldo>
        <TouchableOpacity>
          <OpenQR>
            <IconQR name="qrcode" color="#f76abc" size={30} />
            <TextQR>Open QR</TextQR>
          </OpenQR>
        </TouchableOpacity>
      </Top>

      <Center>
        <Button>
          <IconCard name="credit-card-plus-outline" size={30} color="#000" />
          <TextButton>Adicionar cartão</TextButton>
        </Button>
        <Button>
          <IconCard name="credit-card-outline" size={30} color="#000" />
          <TextButton>Resgatar créditos</TextButton>
        </Button>
      </Center>
      <Bottom>
        <Cards>
          <Title>Seus cartões</Title>
          <Card>
            <Conta>
              <CardBackground>
                <CardBall color="rgba(236,1,1,0.9)"></CardBall>
                <CardBall color="rgba(255,211,29,0.9)" second></CardBall>
              </CardBackground>
              <Numero>**** 1573</Numero>
            </Conta>
            <IconSpace>
              <Icon name="chevron-right" color="#f76abc" size={20} />
            </IconSpace>
          </Card>
          <Card>
            <Conta>
              <CardBackground>
                <CardBall color="rgba(236,1,1,0.9)"></CardBall>
                <CardBall color="rgba(255,211,29,0.9)" second></CardBall>
              </CardBackground>
              <Numero>**** 5006</Numero>
            </Conta>
            <IconSpace>
              <Icon name="chevron-right" color="#f76abc" size={20} />
            </IconSpace>
          </Card>
        </Cards>
      </Bottom>
    </Container>
  );
}

Carteira.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Minha Carteira',
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: { height: 0, width: 0 },
  },
  headerLeft: () => (
    <Back onPress={() => navigation.navigate('Settings')} color="#f76abc" />
  ),
});

export default Carteira;
