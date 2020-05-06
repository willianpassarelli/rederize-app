import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LogoName from '../../assets/logoName';

import MenuTabs from '../../components/MenuTabs';
import CardList from '../../components/CardList';

import api from '../../services/api';

import {
  Container,
  Header,
  Row,
  ActionButtons,
  SearchButton,
  MessageButton,
  BagdeIcon,
  BagdeText,
  NewButton,
  NewText,
  FeedList,
} from './styles';

const Feed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function loadFeed() {
      const response = await api.get('feed');

      setFeed(response.data);
    }
    loadFeed();
  }, []);

  return (
    <Container>
      <Header>
        <Row>
          <LogoName width={120} color="#8f5de8" />
          <ActionButtons>
            <SearchButton>
              <MaterialCommunityIcons
                name="magnify"
                color="#8f5de8"
                size={24}
              />
            </SearchButton>
            <MessageButton>
              <FontAwesome name="send-o" color="#8f5de8" size={22} />
              <BagdeIcon>
                <BagdeText>1</BagdeText>
              </BagdeIcon>
            </MessageButton>
          </ActionButtons>
        </Row>
        <MenuTabs />
        <NewButton>
          <NewText>Criar nova publicação</NewText>
          <Ionicons name="ios-add-circle-outline" color="#fff" size={20} />
        </NewButton>
      </Header>
      <FeedList
        data={feed}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CardList data={item} />}
      />
    </Container>
  );
};

export default Feed;
