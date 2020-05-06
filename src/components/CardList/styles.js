import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  background: #fff;
  padding: 10px 30px;
`;

export const AvatarContainer = styled.View`
  margin-right: 10px;
`;

export const BagdeStatus = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background: #27ff29;
  position: absolute;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 50px;
`;

export const Profile = styled.View``;

export const Name = styled.Text`
  color: #8f5de8;
  font-weight: bold;
`;

export const DatePost = styled.Text`
  color: #8f5de8;
  font-size: 12px;
`;

export const OptionsButton = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
  margin-top: -5px;
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const MenuBottom = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 10px 30px;
`;

export const LikeButton = styled.TouchableOpacity``;

export const MessageButton = styled.TouchableOpacity``;

export const ShareButton = styled.TouchableOpacity``;
