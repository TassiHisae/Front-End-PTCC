import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 10px;
`;

export const Top = styled.View`
  width: 100%;
  background: #fff;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
`;

export const Saldo = styled.View`
  width: 50%;
`;
export const Title = styled.Text`
  font-size: 14px;
`;
export const Value = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Text = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  margin-right: 5px;
  font-weight: bold;
`;

export const OpenQR = styled.View`
  justify-content: center;
  padding: 10px;
  align-items: center;
`;

export const TextQR = styled.Text`
  font-size: 10px;
`;

export const Center = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  background: #fff;
  padding: 10px;
  justify-content: space-between;
  width: 45%;
  height: 80px;
  text-align: center;
  border-radius: 4px;
`;

export const Bottom = styled.View`
  background: #fff;
  margin-top: 10px;
  border-radius: 4px;
`;
export const Card = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
`;
export const Conta = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Cards = styled.View`
  flex-direction: column;
  padding: 10px;
`;
export const Numero = styled.Text`
  margin-left: 10px;
`;

export const IconSpace = styled.TouchableOpacity`
  margin-right: 5px;
  margin-top: 5px;
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
