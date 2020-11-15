import styled from 'styled-components/native';
import DatePicker from 'react-native-datepicker';
export const Container = styled.View`
  padding: 0 15px;
  height: 45px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled(DatePicker).attrs({
  placeholderTextColor: 'rgba(0,0,0,0.6)',
})`
  flex: 1;
  font-size: 30px;
  color: #000;
  border-width: 0;
`;
