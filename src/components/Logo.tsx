import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import RillyLogo from '../data/Lottie/Animations/logo.json'

const Logo = () => (
  <LottieView source={RillyLogo} autoPlay style={styles.image}/>
);

const styles = StyleSheet.create({
  image: {
    marginTop: 25,
    width: 128,
    height: 128,
    marginBottom: 20,
  },
});

export default memo(Logo);
