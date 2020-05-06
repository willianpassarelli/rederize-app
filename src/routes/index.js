import React from 'react';
import { useSelector } from 'react-redux';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = async () => {
  const signed = useSelector(state => state.auth.signed);
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
