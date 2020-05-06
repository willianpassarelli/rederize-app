import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin: 0 30px;
`;

export const LogoView = styled.View`
  margin: 50px 0;
`;

export const Description = styled.Text`
  color: #999;
  text-align: center;
  margin-top: 50px;
`;

export const StravaButton = styled.TouchableOpacity`
  padding: 10px 30px;
  margin: 20px 0;
  border-radius: 30px;
  background: #fc4c02;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 2px #fc4c02;
`;

export const StravaText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const ConnectButton = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 20px;
  background: #fff;
  align-items: center;
  justify-content: center;
  box-shadow: -3px 2px 3px #ccc;
`;

export const ConnectText = styled.Text`
  color: #000;
  font-size: 12px;
`;
