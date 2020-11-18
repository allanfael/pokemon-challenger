import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';
import { Typography } from '@components';
import color from '@themes/colors';

const screenHeight = Dimensions.get('window').height;

export const Container = styled(Animated.View)`
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${color.white};
  z-index: 10;

  border-radius: 10px;
  overflow: hidden;
`;

export const Cover = styled.View`
  height: 120px;
  justify-content: center;
  align-items: center;
  background: ${color.green600};
`;

export const Text = styled(Typography)`
  font-size: 20px;
  padding-top: 20px;
`;

export const Content = styled.View`
  flex: 1;
  height: ${screenHeight};
  background-color: ${color.white100};
  padding-bottom: ${screenHeight / 7};
  padding-right: 20px;
  padding-left: 20px;
`;

export const CloseView = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  align-self: flex-end;
  padding-right: 20px;
  top: 20px;
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

export const Check = styled.View`
  position: absolute;
  top: 30px;
  left: 90%;
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background: ${color.green600};
`;
