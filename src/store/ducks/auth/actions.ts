import { action } from 'typesafe-actions';
import { User, UserTypes } from './types';

export const registerUserName = (name: User) =>
  action(UserTypes.REGISTER_USER_NAME, name);

export const registerUserPokemonType = (pokemonType: User) =>
  action(UserTypes.REGISTER_USER_POKEMON_TYPE, pokemonType);
