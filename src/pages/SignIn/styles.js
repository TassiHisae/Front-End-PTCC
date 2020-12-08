import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Button from '../../components/Button';
import Input from '../../components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: #fefefe;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-top: 20px;
`;

export const SubmitButton = styled(Button)`
  padding: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 10px;
`;
export const SignLinkText = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 14px;
  margin-left: 5px;
`;

export const SocialText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-top: 30px;
`;

export const SocialMediaIcon = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const BaseIcon = styled.View`
  padding: 10px;
  border-radius: 32.5px;
  height: 65px;
  justify-content: center;
  border: ${(props) => (props.border ? props.border : 'rgba(0,0,0,0)')} 2px;
`;

export const ImageIcon = styled.Image`
  width: 40px;
  height: 40px;
  margin-top: 5px;
`;

export const Image = styled.Image`
  width: 72px;
  height: 85px;
  margin-bottom: 10px;
`;
