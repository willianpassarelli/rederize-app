import React, { useMemo } from 'react';
import { formatDistance, getTime } from 'date-fns';
import pt from 'date-fns/locale/pt';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Header,
  AvatarContainer,
  BagdeStatus,
  Avatar,
  Profile,
  Name,
  DatePost,
  OptionsButton,
  PostImage,
  MenuBottom,
  LikeButton,
  MessageButton,
  ShareButton,
} from './styles';

const CardList = ({ data }) => {
  const dateFormatted = useMemo(
    () =>
      formatDistance(new Date(Number(data.date)), new Date(), { locale: pt }),
    [data.date]
  );

  return (
    <Container>
      <Header>
        <AvatarContainer>
          <Avatar source={{ uri: data.image_profile }} />
          <BagdeStatus />
        </AvatarContainer>
        <Profile>
          <Name>{data.name}</Name>
          <DatePost>{dateFormatted}</DatePost>
        </Profile>
        <OptionsButton>
          <MaterialCommunityIcons
            name="dots-horizontal"
            color="#ccc"
            size={28}
          />
        </OptionsButton>
      </Header>
      <PostImage source={{ uri: data.image_post }} />
      <MenuBottom>
        <LikeButton>
          <Ionicons name="ios-heart-empty" color="#8f5de8" size={28} />
        </LikeButton>
        <MessageButton>
          <MaterialCommunityIcons
            name="message-text-outline"
            color="#8f5de8"
            size={28}
          />
        </MessageButton>
        <ShareButton>
          <SimpleLineIcons name="share" color="#8f5de8" size={25} />
        </ShareButton>
      </MenuBottom>
    </Container>
  );
};

export default CardList;
