export enum UserTypes {
  REGISTER_USER_NAME = '@REGISTER_USER_NAME',
  REGISTER_USER_POKEMON_TYPE = '@REGISTER_USER_POKEMON_TYPE',
  SIGN_IN = '@SIGN_IN',
}

export interface User {
  name: string;
  pokemonType: string;
}

export interface UserState {
  user: User;
  signed: boolean;
  loading: boolean;
}
