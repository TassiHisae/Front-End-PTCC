import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 30,
  },
})``;
