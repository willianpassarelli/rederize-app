import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 50px 30px 20px;
  background: #fff;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButtons = styled.View`
  flex-direction: row;
`;

export const SearchButton = styled.TouchableOpacity`
  margin: 0 10px;
`;

export const MessageButton = styled.TouchableOpacity``;

export const BagdeIcon = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background: red;
  position: absolute;
  top: -3px;
  right: -3px;
  align-items: center;
  justify-content: center;
`;

export const BagdeText = styled.Text`
  color: #fff;
  font-size: 10px;
  font-weight: bold;
`;

export const NewButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  margin: 0 40px;
  background: #8f5de8;
  border-radius: 10px;
`;

export const NewText = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-right: 5px;
`;

export const FeedList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
