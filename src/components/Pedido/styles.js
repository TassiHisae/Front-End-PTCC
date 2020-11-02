import styled from "styled-components/native";
import { BaseButton } from "react-native-gesture-handler";

export const Button = styled(BaseButton)`
  height: 46px;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const TextButton = styled.Text`
    font-weight: bold;
    color: #2dc7ff;
    font-size: 15px;
`;

export const Container = styled.View`
  background: #f5f5f5;
  margin-bottom: 15px;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
  padding-bottom: 10px;
`;
export const ContentButton = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const SymbleEnterprise = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 2px solid ${(props) => (props.color ? props.color : "#2dc7ff")};
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const PlusInfo = styled.View`
  margin-bottom: 30px;
`;

export const Right = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const Description = styled.Text`
  font-size: 10px;
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.4);
  font-weight: bold;
`;

export const ListItem = styled.View`
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  width: 100%;
`;

export const Product = styled.Text`
  margin-left: 10px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
`;
