import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

import Input from '../../../components/Input';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding-top: 0;
`;

export const Top = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const Local = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #eee;
  padding: 10px;
  padding-bottom: 5px;
`;

export const LocalText = styled.Text`
  margin-left: -15px;
  font-weight: bold;
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

export const LocalTextContent = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #666;
  margin-left: 10px;
`;

export const Content = styled.View`
  background: #fff;
  margin-top: 10px;
  width: 100%;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const Address = styled.View`
  flex-direction: column;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #aaa;
  margin-left: 10px;
  font-weight: bold;
`;

export const IconSpace = styled.View`
  margin-top: 30px;
`;

export const IconSpaceOption = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Center = styled.View`
  padding: 10px;
`;
