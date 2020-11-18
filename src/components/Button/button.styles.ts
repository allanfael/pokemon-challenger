import styled from 'styled-components/native';
import color from '@themes/colors';

export const Container = styled.View`
  height: 54px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${color.pink};
`;

export const TouchableOpacity = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;
