import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

// Componentes
import Background from '@components/Background';

import { filterByType } from '../../../util/filter';

import {
  Container,
  AppName,
  Search,
  ChooseAgainButton,
  HorizontalScroll,
  ButtonImage,
  PokemonImage,
  PokemonName,
  FlatList,
  ItemContainer,
  ItemImage,
  ItemText,
  Line,
} from './dashboard.styles';

const Dashboard = () => {
  // UserSelector
  const UserPokemonType = useSelector((state) => state.auth.user.pokemonType);

  //PokemonSelector
  const pokemonsType = useSelector(
    (state) => state.pokemon.pokemons.collection.pokemonType
  );
  const pokemons = useSelector(
    (state) => state.pokemon.pokemons.collection.pokemon
  );

  const [pokemonsList, setPokemonsList] = useState(pokemons);
  const [text, setText] = useState();
  const [again, setAgain] = useState(true);

  // Iniciar com listagem dos pokemons do tipo escolhido
  useEffect(() => {
    const newList = _.filter(
      pokemonsList,
      (item: string) => item.type[1] === UserPokemonType
    );

    setPokemonsList(newList);
  }, []);

  // Atualizar listagem
  const updateList = () => {
    setPokemonsList(pokemons);
    setAgain(false);
  };

  // Filtrar por Nome
  const filterListByName = () => {
    if (!text) return false;

    const newList = _.filter(pokemonsList, (item) => item.name === text);
    setPokemonsList(newList);
  };

  // Filtrar por Tipo
  const filterListByType = (type: string) => {
    setAgain(true);

    const newList = _.filter(
      pokemonsList,
      (item: string) => item.type[1] === type
    );

    setPokemonsList(newList);
  };

  const renderItem = (
    item: { thumbnailImage: string; name: string },
    key: string
  ) => {
    return (
      <>
        <ItemContainer key={key}>
          <ItemImage source={{ uri: item.thumbnailImage }} />
          <ItemText text={item.name} />
        </ItemContainer>
        <Line />
      </>
    );
  };

  return (
    <Background>
      <Container>
        <AppName text='Pokemon Finder' />
        <Search
          placeholder='Search'
          clearButtonMode='always'
          returnKeyType='search'
          onFocus={() => updateList()}
          autoCorrect={false}
          value={text}
          onChangeText={(value) => setText(value)}
          onSubmitEditing={() => filterListByName()}
        />

        {again ? (
          <ChooseAgainButton
            title='Another Type ?'
            onPress={() => updateList()}
          />
        ) : (
          <HorizontalScroll horizontal showsHorizontalScrollIndicator={false}>
            {pokemonsType.map((item, index) => (
              <ButtonImage
                onPress={() => {
                  setPokemonsList(pokemons);
                  filterListByType(item.name);
                }}>
                <PokemonImage source={{ uri: item.thumbnailImage }} />
                <PokemonName text={item.name} />
              </ButtonImage>
            ))}
          </HorizontalScroll>
        )}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={pokemonsList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => renderItem(item)}
        />
      </Container>
    </Background>
  );
};

export default Dashboard;
