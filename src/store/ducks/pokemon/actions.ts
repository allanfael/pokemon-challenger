import { action } from 'typesafe-actions';
import { PokemonTypes, Pokemon } from './types';

export const repositoryRequest = () => action(PokemonTypes.POKEMON_REQUEST);

export const repositorySuccess = (collection: Pokemon) =>
  action(PokemonTypes.POKEMON_SUCCESS, collection);

export const repositoryFailure = () => action(PokemonTypes.POKEMON_FAILURE);

export const openScreen = (open: boolean) =>
  action(PokemonTypes.OPEN_SCREEN, open);
