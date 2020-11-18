export enum PokemonTypes {
  POKEMON_REQUEST = '@POKEMON_REQUEST',
  POKEMON_SUCCESS = '@POKEMON_SUCCESS',
  POKEMON_FAILURE = '@POKEMON_FAILURE',
  OPEN_SCREEN = '@OPEN_SCREEN',
}

export interface Pokemon {
  collection: {};
}

export interface PokemonState {
  pokemons: Pokemon;
  loading: boolean;
  openScreen: boolean;
}
