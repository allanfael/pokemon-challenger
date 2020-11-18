import React from 'react';
import { TextStyle } from 'react-native';

import { Text } from './typography.styles';

interface TypographyProps {
  text: string;
  style?: TextStyle;
}

export const Typography = (props: TypographyProps) => {
  const { text, ...style } = props;

  return <Text {...style}>{text}</Text>;
};

export default Typography;
