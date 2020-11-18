import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';

// Components
import Background from '@components/Background';

// Actions
import { repositoryRequest } from '@store/ducks/pokemon/actions';
import { registerUserPokemonType } from '@store/ducks/auth/actions';

import {
  Container,
  TextQuestion,
  TextAskName,
  TextInput,
  Button,
} from './registerName.styles';

const RegisterName = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  // Limpar pokemon type caso ja esteja preenchido
  useEffect(() => {
    dispatch(registerUserPokemonType(''));
  }, []);

  const fetchData = () => {
    dispatch(repositoryRequest());
    navigate('RegisterPokemonScreen', { name });
  };

  return (
    <Background>
      <Container>
        <TextQuestion text="Let's meet each other first?" />
        <TextAskName text='First we need to know your name..' />
        <TextInput
          line
          value={name}
          onChangeText={(text) => setName(text)}
          onSubmitEditing={() => fetchData()}
          returnKeyType='next'
        />

        <Button onPress={() => fetchData()}>
          <Icon name='arrow-forward' size={50} color='#fff' />
        </Button>
      </Container>
    </Background>
  );
};

export default RegisterName;
