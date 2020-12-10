import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 10px;
`;

export const SpaceOfAddress = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  padding: 10px;
  background: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Box = styled.View`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #333;
  margin-top: 10px;
  font-weight: bold;
`;

export const TextTime = styled.Text`
  font-size: 16px;
  color: #000;
  margin-top: 10px;
  font-weight: bold;
`;

export const Touchable = styled.TouchableOpacity`
  margin-right: 10px;
  margin-top: 14px;
`;


export const Address = styled.Text`
color: rgba(0, 0, 0, 0.6);
  font-size: 10px;
  margin-bottom: 10px;
  `;

export const CpfText = styled.Text`
color: rgba(0, 0, 0, 0.6);
font-size: 11px;
margin-top: 3px;
`;

export const SpaceOfFreight = styled.View`
width: 100%;
height: 65px;
border-radius: 4px;
padding: 15px;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 2px;
border-width: 1.5px;
border-color: #f76abc;
background: #fff;
`;

export const TypeOfFreight = styled.Text`
color: #2dc7ff;
font-weight: bold;
font-size: 13px;
  margin-bottom: 2px;
  `;
  export const Time = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  font-size: 13px;
  margin-bottom: 2px;
`;
export const Value = styled.Text`
font-size: 14px;
font-weight: bold;
`;

export const SpaceOfOrder = styled.View`
margin-top: 5px;
width: 100%;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  `;

  export const BoxOfOrder = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  padding-left: 10px;
  align-items: center;
  padding-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  height: 110px;
  `;

  export const TextProd = styled.Text`
  margin-bottom: 10px;
  margin-left: 10px;
  `;
  export const ValueOfProd = styled.Text`
  `;

  export const Image = styled.Image`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  `;

  export const ViewText = styled.View`
    margin-left: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  `;

  export const AddItens = styled.View`
  padding: 10px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 50px;
  border-top-width: 0.5px;
  border-top-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

export const ViewSpaceBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TextItens = styled.Text`
  color: #2dc7ff;
  font-size: 14px;
`;

export const TextSubTotal = styled.Text`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  margin-right: 10px;
`;

export const TextTotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const SpaceOfPayment = styled.View`
  background: #fff;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 4px;
  margin-top: 4px;
  padding: 10px;
`;

export const OptionWallet = styled.View``;
export const TextOption = styled.Text`
  color: rgba(0, 0, 0, 0.4);
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;
export const Marked = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  background: #999;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 10px;

  border-width: ${(props) => (props.isMarked ? '5px' : '0')};
  border-color: ${(props) => (props.isMarked ? '#f76abc' : 'rgba(0,0,0,0)')};
`;

export const Cpf = styled.View`
  margin-top: 10px;
  width: 100%;
`;

export const View = styled.View`
  width: 30%;
  height: 80px;
  border-radius: 5px;
  background: ${(props) => (props.color ? props.color : 'rgba(0,0,0,0)')};
  margin-left: ${(props) => (props.second ? '-3px' : '0')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ViewContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(BaseButton)`
background: #2dc7ff;
color: #fff;
width: 30px;
height: 30px;
border-radius: 4px;
align-items: center;
justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  align-self: center;
  justify-content: center;
`;

export const TextQtd = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
  padding-left: 5px;
  padding-right: 5px;
`;

export const CardBackground = styled.View`
  width: 30px;
  height: 23px;
  background: #333;
  border-radius: 2px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const CardBall = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: ${(props) => (props.color ? props.color : 'rgba(0,0,0,0)')};
  margin-left: ${(props) => (props.second ? '-3px' : '0')};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

