import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Animated, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Actions
import { openScreen } from '@store/ducks/pokemon/actions';
import { registerUserPokemonType } from '@store/ducks/auth/actions';

import {
  Container,
  Content,
  Cover,
  Text,
  CloseButton,
  CloseView,
  ItemContainer,
  ItemImage,
  ItemText,
  Check,
  Line,
} from './choosePokemon.styles';

interface ChoosePokemonType {
  collection: object;
}

const { Value } = Animated;
const screenHeight = Dimensions.get('window').height;

const ChoosePokemon = ({ collection }: ChoosePokemonType) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.pokemon.openScreen);

  const [selected, setSelected] = useState('');
  const top = useState(new Value(screenHeight))[0];

  if (open) {
    Animated.spring(top, {
      toValue: 120,
      bounciness: 4,
      useNativeDriver: true,
    }).start();
  }

  const closeList = () => {
    dispatch(openScreen(false));
    Animated.spring(top, {
      toValue: screenHeight,
      useNativeDriver: true,
    }).start();
  };

  const onPressAction = (key: string) => {
    !!selected && setSelected('');
    setSelected(key);
    dispatch(registerUserPokemonType(key));

    setTimeout(() => {
      closeList();
    }, 300);
  };

  useEffect(() => {
    closeList();
  }, []);

  const renderItem = (item: { thumbnailImage: string; name: string }) => {
    return (
      <>
        <ItemContainer onPress={() => onPressAction(item.name)}>
          <ItemImage source={{ uri: item.thumbnailImage }} />
          <ItemText text={item.name} />
          {selected === item.name && <Check />}
        </ItemContainer>
        <Line />
      </>
    );
  };

  return (
    <Container style={{ transform: [{ translateY: top }] }}>
      <Cover>
        <CloseButton onPress={() => closeList()}>
          <CloseView>
            <Icon name='close-outline' size={30} color='#fff' />
          </CloseView>
        </CloseButton>
        <Text text='Select your favorite pokémon type' />
      </Cover>

      <Content>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={collection}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => renderItem(item)}
        />
      </Content>
    </Container>
  );
};

export default ChoosePokemon;
