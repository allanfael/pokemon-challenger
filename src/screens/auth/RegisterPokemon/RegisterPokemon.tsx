import React from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

// Components
import Background from '@components/Background';
import { Load } from '@components';

// Actions
import { openScreen } from '@store/ducks/pokemon/actions';
import { registerUserName } from '@store/ducks/auth/actions';

// Modal Screen
import ChoosePokemon from '../ChoosePokemon';

import {
  Container,
  WelcomeText,
  TextAskPokemon,
  TextChosen,
  ChooseButton,
  ForwardButton,
} from './registerPokemon.styles';

const RegisterPokemon = ({ route }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  // Selector
  const pokemonType = useSelector(
    (state) => state.pokemon.pokemons.collection.pokemonType
  );
  const type = useSelector((state) => state.auth.user.pokemonType);

  const name = route.params.name;

  // Nome do usuário
  let defaultName: string = name ? name : 'Dev';
  const welCome: string = `Hello, ${defaultName}!`;

  // Abre Screen de escolher tipo de pokemon
  const fetchData = () => {
    dispatch(openScreen(true));
  };

  const register = () => {
    if (!type) {
      return Alert.alert('Ops!', 'Please choose your Pokemon type');
    } else {
      dispatch(registerUserName(defaultName));
      navigate('DashboardScreen');
    }
  };

  return (
    <Background>
      <ChoosePokemon collection={pokemonType} />
      <Container>
        <WelcomeText text={welCome} />
        <TextAskPokemon text='..now tell us wich is your favorite Pokemon type' />
        <TextChosen text={`Your pokemon type is: ${type.toUpperCase()}`} />

        {!!pokemonType ? (
          <ChooseButton title='Choose' onPress={() => fetchData()} />
        ) : (
          <Load />
        )}

        <ForwardButton onPress={() => register()}>
          <Icon name='arrow-forward' size={50} color='#fff' />
        </ForwardButton>
      </Container>
    </Background>
  );
};

export default RegisterPokemon;
