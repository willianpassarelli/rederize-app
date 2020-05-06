import React from 'react';
import { useDispatch } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';

import Logo from '../../assets/logo';

import {
  Container,
  LogoView,
  Description,
  StravaButton,
  StravaText,
  ConnectButton,
  ConnectText,
} from './styles';

const Login = () => {
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest());
  }

  return (
    <Container>
      <LogoView>
        <Logo color="#8f5de8" size={80} />
      </LogoView>
      <Description>
        Para ter acesso a todas as funcionalidades recomendamos que conecte seu
        strava!
      </Description>
      <StravaButton onPress={handleSubmit}>
        <StravaText>Conectar Strava</StravaText>
      </StravaButton>
      <ConnectButton onPress={handleSubmit}>
        <ConnectText>Outras opções de Login</ConnectText>
      </ConnectButton>
    </Container>
  );
};

export default Login;
