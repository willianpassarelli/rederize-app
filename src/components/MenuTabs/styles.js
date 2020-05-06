import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px 0;
  justify-content: center;
  align-items: center;
`;

export const TabsContainer = styled.View`
  flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity`
  margin: 0 20px;
`;

export const TabText = styled.Text`
  font-weight: ${props => (props.focused ? 'bold' : '500')};
  color: #8f5de8;
`;

export const TabBorder = styled.View`
  border-radius: 5px;
  border-bottom-color: #8f5de8;
  border-bottom-width: 2px;
  margin-top: 2px;
`;
