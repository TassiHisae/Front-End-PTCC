import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconOption from 'react-native-vector-icons/SimpleLineIcons';
import {
  Container,
  Top,
  FormInput,
  Local,
  LocalText,
  Content,
  Address,
  Text,
  IconSpace,
  LocalTextContent,
  IconSpaceOption,
  Center,
} from './styles';
import Back from '../../../components/Back';

function Endereco() {
  return (
    <Container>
      <Top>
        <FormInput color="#2dc7ff" icon="search" size={25} />
        <Local>
          <IconSpace>
            <Icon name="gps-fixed" color="#000" size={25} />
          </IconSpace>
          <Address>
            <LocalText>Usar minha localização</LocalText>
            <Text>Rua Padre Cícero - Jd. Saint Morritz</Text>
            <Text>Taboão da Serra - SP</Text>
          </Address>
        </Local>
      </Top>

      <Center>
        <Content>
          <Icon name="location-on" color="#000" size={25} />
          <Address>
            <LocalTextContent>Rua Padre Cícero</LocalTextContent>
            <Text>Jd. Saint Morritz</Text>
            <Text>Taboão da Serra - SP</Text>
          </Address>
          <IconSpaceOption>
            <IconOption name="options-vertical" color="#f76abc" size={15} />
          </IconSpaceOption>
        </Content>
        <Content>
          <Icon name="location-on" color="#000" size={25} />
          <Address>
            <LocalTextContent>Rua Restinga Seca</LocalTextContent>
            <Text>Jd. Record</Text>
            <Text>Taboão da Serra - SP</Text>
          </Address>
          <IconSpaceOption>
            <IconOption name="options-vertical" color="#f76abc" size={15} />
          </IconSpaceOption>
        </Content>
      </Center>
    </Container>
  );
}

Endereco.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Endereço de Entrega',
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

export default Endereco;
