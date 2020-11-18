import producer from 'immer';
import { Reducer } from 'redux';

import { PokemonTypes, PokemonState } from './types';

const INITIAL_STATE: PokemonState = {
  pokemons: {
    collection: {},
  },
  loading: false,
  openScreen: false,
};

const pokemon: Reducer<PokemonState> = (state = INITIAL_STATE, action) => {
  return producer(state, (draft) => {
    switch (action.type) {
      case PokemonTypes.POKEMON_REQUEST:
        draft.loading = true;
        break;
      case PokemonTypes.POKEMON_SUCCESS:
        draft.pokemons.collection = action.payload;
        draft.loading = false;
        break;
      case PokemonTypes.POKEMON_FAILURE:
        draft.loading = false;
        break;
      case PokemonTypes.OPEN_SCREEN:
        draft.openScreen = action.payload;
        break;
      default:
        break;
    }
  });
};

export default pokemon;
