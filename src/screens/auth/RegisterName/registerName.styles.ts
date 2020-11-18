import styled from 'styled-components/native';
import { Typography, Input } from '@components';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const TextQuestion = styled(Typography)`
  font-size: 26px;
  font-weight: 500;
  margin-top: 40px;
`;

export const TextAskName = styled(Typography)`
  font-size: 22px;
  font-weight: 400;
  margin-top: 50%;
`;

export const TextInput = styled(Input)`
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
})`
  align-self: center;
  margin-top: 220px;
`;
