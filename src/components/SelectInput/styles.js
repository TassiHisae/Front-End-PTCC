import styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';

export const RNInput = styled(RNPickerSelect)`
  width: ${(props) => (props.size ? props.size : '100%')};
`;
