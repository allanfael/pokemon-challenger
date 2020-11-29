import React from 'react';

// Components
import Background from '@components/Background';

// Images
import pokemon from '@assets/pokemon-logo.png';
import finder from '@assets/finder.png';
import pikachu from '@assets/pikachu.png';

import { Container, Image, GoButton } from './welcome.styles';

const Welcome = ({ navigation }) => {
  return (
    <Background>
      <Container>
        <Image source={pokemon} />
        <Image source={finder} />

        <GoButton
          title="Let's Go!"
          onPress={() => navigation.navigate('RegisterNameScreen')}
        />
      </Container>
      <Image
        style={{ justifyContent: 'flex-end', alignSelf: 'flex-end' }}
        source={pikachu}
      />
    </Background>
  );
};

export default Welcome;
