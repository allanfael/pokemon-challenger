import React from 'react';
import { ViewStyle } from 'react-native';

import { Typography } from '../Typography';

import { Container, TouchableOpacity } from './button.styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

export const Button = (props: ButtonProps) => {
  const { title, onPress, style } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Container style={style}>
        <Typography text={title} style={{ fontSize: 22, fontWeight: 'bold' }} />
      </Container>
    </TouchableOpacity>
  );
};

export default Button;
