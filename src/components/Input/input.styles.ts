import styled from 'styled-components/native';
import font from '@themes/fonts';
import color from '@themes/colors';

export const Container = styled.View`
  width: 100%;
`;

export const TextInput = styled.TextInput`
  color: rgba(0, 0, 0, 0.8);
  padding: 0 10px;
  font-size: 18px;
  font-family: ${font.font};
  font-weight: 500;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  margin-top: 5px;
  border: 1px solid ${color.white};
`;
