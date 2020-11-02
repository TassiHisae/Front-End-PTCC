import styled from "styled-components/native";
import { BaseButton } from "react-native-gesture-handler";

export const Container = styled.View`
  background: #eee;
  border-radius: 45px;
  height: 90px;
  width: 90px;
  border-color: #2dc7ff;
  border-width: 2px;
`;

export const Button = styled(BaseButton)`
  border-radius: 45px;
  height: 90px;
  width: 90px;
`;

export const Description = styled.Text`
  font-size: 13px;
  color: #000;
  margin-top: 5px;
  font-weight: bold;
`;

export const Box = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.Image`
  border-radius: 45px;
  height: 85px;
  width: 85px;
`;
