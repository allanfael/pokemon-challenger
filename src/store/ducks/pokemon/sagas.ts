import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { PokemonTypes } from './types';
import { repositorySuccess, repositoryFailure } from './actions';

import api from '@services/api';

export function* request() {
  try {
    const pokemonType = yield api.get('/types.json');
    const pokemonCollection = yield api.get('/pokemons.json');

    yield call(success, { pokemonType, pokemonCollection });
  } catch (error) {
    Alert.alert('Error', error.message);
    yield put(repositoryFailure());
  }
}

export function* success(response: object) {
  const pokemon = response.pokemonCollection.data;
  const pokemonType = response.pokemonType.data.results;
  const collection = { pokemon, pokemonType };

  yield put(repositorySuccess(collection));
}

export default all([takeLatest(PokemonTypes.POKEMON_REQUEST, request)]);
