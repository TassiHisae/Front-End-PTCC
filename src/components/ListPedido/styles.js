import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  width: 100%;
  border-bottom-color: rgba(0, 0, 0, 0.3);
  border-bottom-width: 0.5px;
`;

export const Product = styled.Text`
  margin-left: 10px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
`;

export const BoxNumber = styled.View`
  width: 15px;
  height: 15px;
  background: rgba(0, 0, 0, 0.6);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;
export const Number = styled.Text`
  color: #f5f5f5;
  font-size: 10px;
  margin-left: 3px;
`;
