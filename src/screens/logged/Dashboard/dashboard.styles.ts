import styled from 'styled-components/native';
import { Typography, Input, Button } from '@components';
import color from '@themes/colors';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const AppName = styled(Typography)`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 20px;
`;

export const Search = styled(Input)`
  padding-left: 20px;
  height: 32px;
  color: #131313;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.6);
`;

export const ChooseAgainButton = styled(Button)`
  position: absolute;
  top: 40px;
  height: 42px;
  align-self: center;
  width: 200px;
  border-radius: 21px;
`;

export const ButtonImage = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const PokemonImage = styled.Image`
  height: 50px;
  width: 50px;
  margin-left: 30px;
`;

export const PokemonName = styled(Typography)`
  font-size: 22px;
  color: ${color.black};
  font-weight: 600;
  margin-left: 30px;
`;

export const HorizontalScroll = styled.ScrollView`
  position: absolute;
  top: 120px;
  background: ${color.white};
  height: 100px;
  align-self: center;
  border-radius: 8px;
`;

export const FlatList = styled.FlatList`
  margin-top: 120px;
  background-color: ${color.white};
  border-radius: 8px;
  padding-left: 20px;
`;

export const ItemContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding-top: 10px;
`;

export const ItemImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const ItemText = styled(Typography)`
  font-size: 22px;
  color: #000;
  font-weight: 600;
  margin-left: 30px;
`;

export const Line = styled.View`
  border: 0.5px solid ${color.white200};
`;
