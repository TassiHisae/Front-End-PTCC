import styled from "styled-components/native";
import { BaseButton } from "react-native-gesture-handler";

export const Container = styled(BaseButton)`
  margin-bottom: 5px;
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SymbleEnterprise = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: 2px;
  border-color: ${(props) => (props.color ? props.color : "#2dc7ff")};
`;

export const Info = styled.View`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const Right = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

export const Adicionais = styled.View`
  margin-top: 5px;
`;
export const RamoAtuacao = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const TempoDeEntrega = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;
export const ValorFrete = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;
