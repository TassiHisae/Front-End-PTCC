import styled from 'styled-components/native';
import Input from '../../../components/Input';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 30px;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const Touchable = styled.TouchableOpacity``;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 20px;
  border-width: 2px;
  border-color: #f76abc;
`;

export const Button = styled(BaseButton)`
  margin-top: 10px;
  background: #2dc7ff;
  width: 100%;
  height: 46px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
