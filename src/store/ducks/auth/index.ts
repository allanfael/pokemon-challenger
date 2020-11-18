import producer from 'immer';
import { Reducer } from 'redux';

import { UserState, UserTypes } from './types';

const INITIAL_STATE: UserState = {
  user: {
    name: '',
    pokemonType: '',
  },
  signed: false,
  loading: false,
};

const auth: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  return producer(state, (draft) => {
    switch (action.type) {
      case UserTypes.REGISTER_USER_NAME:
        draft.user.name = action.payload;
        draft.signed = true;
        break;
      case UserTypes.REGISTER_USER_POKEMON_TYPE:
        draft.user.pokemonType = action.payload;
        break;
      default:
        break;
    }
  });
};

export default auth;
