import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions
} from 'react-native';
import TextComponent from '../components/TextComponent';
import Card from '../components/Card';
import { theme } from '../core/theme';

const {width, height} = Dimensions.get('screen');

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.icons}></View>

          <View>
            <TextComponent size={34}>Bem vinda, Rafaelly</TextComponent>
          </View>

          <View style={styles.portfolio_container}>
            <View style={styles.portfolio}>
              <View style={styles.portfolio_header}>
                <TextComponent size={16} color={'#fff'} weight={'bold'}>
                  Seu saldo disponível:
                </TextComponent>
              </View>

              <View style={styles.portfolio_content}>
                <TextComponent size={32} color={'#fff'} weight={'bold'}>
                  R$0,00
                </TextComponent>

                <View style={styles.invest}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate('AvaliableInvestments')}
                  >
                    <TextComponent
                      size={14}
                      color={theme.colors.secondary}
                      spacing={1}
                      weight={'bold'}
                    >
                      Investir agora
                    </TextComponent>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.plans_container}>
            <TextComponent size={22} weight={'bold'}>
              Melhores ações
            </TextComponent>
          </View>

          <Card />

          <View style={styles.guide_container}>
            <TextComponent size={22} weight={'bold'}>
              Dicas de como investir
            </TextComponent>
            <View style={styles.guide}>
              <View>
                <View style={styles.guide_header}>
                  <TextComponent
                    size={18}
                    weight={'bold'}
                    color={'#4F4F4F'}
                    spacing={1}
                  >
                    Como eu posso começar?
                  </TextComponent>
                </View>

                <View style={styles.guide_description}>
                  <TextComponent size={14} color={'#4F4F4F'} spacing={1}>
                    Para iniciantes, sempre recomendamos fundos de investimentos
                    que tenha alguma segurança, como CLBR, PETR4, TOTVS3 entre outros
                  </TextComponent>
                </View>
              </View>

              <View style={styles.guide_ellipse}>
                <Image source={require('../assets/ellipse2.png')} />
              </View>
            </View>
            <View
              style={{
                borderBottomColor: '#4A4A4A',
                borderBottomWidth: 1,
              }}
            />
            <View style={styles.guide}>
              <View>
                <View style={styles.guide_header}>
                  <TextComponent
                    size={18}
                    weight={'bold'}
                    color={'#4F4F4F'}
                    spacing={1}
                  >
                    Tipos básicos de investimento
                  </TextComponent>
                </View>

                <View style={styles.guide_description}>
                  <TextComponent size={14} color={'#4F4F4F'} spacing={1}>
                    Renda fixa, renda variavel, fundos etc...
                  </TextComponent>
                </View>
              </View>

              <View style={styles.guide_ellipse}>
                <Image source={require('../assets/ellipse.png')} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: width / 6,
    paddingLeft: 30,
    paddingRight: 30,
  },
  icons: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  portfolio_container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  portfolio: {
    width: width / 1.1,
    height: height / 5,
    borderRadius: width/ 20,
    backgroundColor: theme.colors.primary,
    marginTop: width / 15,
  },
  portfolio_header: {
    paddingTop: width / 15,
    paddingBottom: width / 22,
    paddingLeft: width / 12,
  },
  portfolio_content: {
    paddingTop: width / 200,
    paddingBottom: width / 22,
    paddingLeft: width / 18,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  invest: {
    backgroundColor: '#fff',
    width: 125,
    height: 40,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plans_container: {
    marginTop: 47,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  guide_container: {
    marginTop: width / 10,
    marginBottom: width / 6
  },
  guide: {
    marginTop: width / 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: width / 20,
    marginRight: width / 30
  },
  guide_header: {
    paddingBottom: width / 20,
    width: width / 1.4,
  },
  guide_description: {
    paddingBottom: 19,
    width: width / 1.4,
  },
  guide_ellipse: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  see_all: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
