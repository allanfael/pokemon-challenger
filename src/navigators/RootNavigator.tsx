import React from 'react';
import { useSelector } from 'react-redux';

//Stacks
import AuthNavigator from '@navigator/AuthNavigation';
import UserNavigator from '@navigator/UserNavigator';

const RootNavigator = () => {
  const signed = useSelector((state) => state.auth.signed);

  return signed ? <UserNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
