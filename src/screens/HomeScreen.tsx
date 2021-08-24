import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Rilly Invest</Header>

    <Paragraph>
    A forma mais fácil de INVESTIR na Bolsa
    </Paragraph>
    
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Entrar
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Registrar
    </Button>
  </Background>
);

export default memo(HomeScreen);
