import styled from 'styled-components/native';
import { Typography, Input, Button } from '@components';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const WelcomeText = styled(Typography)`
  font-size: 26px;
  font-weight: 500;
  margin-top: 40px;
`;

export const TextAskPokemon = styled(Typography)`
  font-size: 22px;
  font-weight: 400;
  margin-top: 50%;
  margin-bottom: 20px;
`;

export const TextChosen = styled(Typography)`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const ChooseButton = styled(Button)`
  width: 50%;
  height: 42px;
  border-radius: 26px;
  align-self: center;
`;

export const ForwardButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
})`
  align-self: center;
  margin-top: 114px;
`;
