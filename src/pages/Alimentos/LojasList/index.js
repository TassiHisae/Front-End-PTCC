import React,{useContext} from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { TouchableHighlight } from "react-native";
import LojaContext from '../../../data/Loja/Context'
import {
  Container,
  Left,
  SymbleEnterprise,
  Info,
  Name,
  Right,
  Adicionais,
  RamoAtuacao,
  TempoDeEntrega,
  ValorFrete,
} from "./styles";

function Avaliado({ item,navigation }) {
  const {GetId} = useContext(LojaContext)

function setId(){

  GetId(item.item.id)

  navigation.navigate("PetShopAcessorios",item)
}

  return (
    <TouchableHighlight onPress={ setId }>
    <Container>
      <Left>
        <SymbleEnterprise
          color={item.item.color}
          source={{
            uri: item.item.url,
          }}
        />
        <Info>
          <Name>{item.item.name}</Name>
          <Adicionais>
            <RamoAtuacao>
              <TempoDeEntrega>{item.item.ramo + " "}</TempoDeEntrega>
              <MaterialCommunityIcons
                name="circle"
                size={5}
                color="rgba(0,0,0,0.4)"
                style={{
                  marginTop: 3,
                }}
              />
              <TempoDeEntrega>{" " + item.item.tempoEstimadoEntrega}</TempoDeEntrega>
            </RamoAtuacao>
            <ValorFrete>Frete: {" " + item.item.frete}</ValorFrete>
          </Adicionais>
        </Info>
      </Left>
      <Right>
        <Icon name="star" size={12} color="#ffd700" />
        <Icon name="star" size={12} color="#ffd700" />
        <Icon name="star" size={12} color="#ffd700" />
        <Icon name="star" size={12} color="#ffd700" />
        <Icon name="star-half" size={12} color="#ffd700" />
      </Right>
    </Container>
    </TouchableHighlight>
  );
}

export default Avaliado;
