import React, { memo, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { Navigation } from '../types';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
  birthValidator,
} from '../core/utils';

import TypeWriter from 'react-native-typewriter';

type Props = {
  navigation: Navigation;
};
const { width, height } = Dimensions.get('window');

const RegisterScreen = ({ navigation }: Props) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [birth, setBirth] = useState({ value: '', error: '' });
  const [birthLabel, setBirthLabel] = useState('Quando você me conheceu?');
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const birthError = birthValidator(birth.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError || birthError) {
      setName({ ...name, error: nameError });
      setBirth({ ...birth, error: birthError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate('Dashboard');
  };

  useEffect(() => {
    setTimeout(function() {
      setBirthLabel('Quando você nasceu?');
    }, 2200);
  })

  return (
    <SafeAreaView style={{flex: 1 }}>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />
      <ScrollView>
    <Background>

      <Logo />

      <Header>Registre-se</Header>
      
      <Text>Nome</Text>
      <TextInput
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TypeWriter typing={1}>{birthLabel}</TypeWriter>
      <TextInput
        returnKeyType="next"
        value={birth.value}
        onChangeText={text => setBirth({ value: text, error: '' })}
        error={!!birth.error}
        errorText={birth.error}
        autoCapitalize="none"
        textContentType="emailAddress"
      />
      <Text>Email</Text>
      <TextInput
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <Text>Senha</Text>
      <TextInput
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Entrar
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Já tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </Background>
    </ScrollView >
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
    marginTop: width / 20,
    marginBottom: width / 20
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: width / 20,
    marginBottom: width /20
  },
  marginTop: {
    marginTop: 10,
  },
});

export default memo(RegisterScreen);
