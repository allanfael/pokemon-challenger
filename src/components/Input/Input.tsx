import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Line } from './input.styles';

export const Input = (props: TextInputProps) => {
  const { line = false, ...restProps } = props;

  return (
    <Container>
      <TextInput {...restProps} maxLength={45} />
      {line && <Line />}
    </Container>
  );
};

export default Input;
