import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 50px;
`;

export const Item = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  padding-bottom: 28px;
  padding-top: 28px;
  background: #f9f9f9;
  border-radius: 4px;
`;

export const TextItem = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-left: 20px;
  color: rgba(0, 0, 0, 0.8);
`;

export const ListItem = styled.TouchableOpacity`
  padding-left: 20px;
  padding-right: 20px;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 40px;
  padding-top: 40px;
  width: 100%;
  margin-bottom: 10px;
`;
