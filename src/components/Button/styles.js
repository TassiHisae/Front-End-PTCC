import styled from "styled-components/native";
import { BaseButton } from "react-native-gesture-handler";

export const Container = styled(BaseButton)`
  height: 46px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  min-width: 1000px;
  background: ${(props) => (props.color ? props.color : "#2dc7ff")};
`;

export const Text = styled.Text`
  color: ${(props) => (props.textColor ? props.textColor : "#fff")};
  font-weight: bold;
  font-size: 16px;
`;
