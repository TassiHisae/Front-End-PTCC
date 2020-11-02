import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 30px;
  flex: 1;
  padding: 5px;
`;

export const SearchBackground = styled.View`
  background: #f5f5f5;
  height: 40px;
  border-radius: 4px;
  padding: 4px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchTxt = styled.TextInput`
  margin-left: 10px;
  height: 40px;
  width: 100%;
`;

export const BuscasRecentes = styled.View`
  margin-top: 20px;
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
export const Recente = styled.View`
  margin-top: 15px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
  margin-left: 10px;
`;

export const ProcuraPorClick = styled.View`
  margin-top: 20px;
  margin-left: 10px;
`;
