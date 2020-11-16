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
  background: #ddd;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Box = styled.View`
  background: #bbb;
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

export const ViewText = styled.View`
  margin-left: 10px;
  flex-direction: column;
  justify-content: space-between;
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
  border-radius: 4px;
  padding: 10px;
`;

export const BoxOfOrder = styled.View`
  border-top-width: 0.5px;
  border-top-color: rgba(0, 0, 0, 0.1);
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextProd = styled.Text`
  margin-bottom: 10px;
  margin-left: 10px;
`;
export const ValueOfProd = styled.Text`
  margin-left: 10px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  margin-right: 10px;
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
  background: #ddd;
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

export const Button = styled(BaseButton)`
  margin-top: 10px;
  background: #2dc7ff;
  width: 100%;
  height: 46px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
