import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Container } from "./styles";

export default function Back({ color, ...rest }) {
  return (
    <Container {...rest}>
      <Icon name="chevron-left" size={25} color={color ? color : "#333"} />
    </Container>
  );
}
