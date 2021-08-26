import React, { memo, useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Navigation } from '../../types';
import styles from './styles.js';
import TextComponent from '../../components/TextComponent';
import { theme } from '../../core/theme';
import InvestmentCard from '../../components/InvestmentsCard';
import data from './data.json';
import { Button } from 'react-native-paper';
import ModalComponent from '../../components/Modal';
import modalAnimation from '../../data/Lottie/Animations/logo.json';

type Props = {
  navigation: Navigation;
};

function AvaliableInvestments({ navigation }: Props) {
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <TextComponent size={28} color={theme.colors.primary} weight="bold">
            Confira nossos principais investimentos
          </TextComponent>

          <View style={styles.descriptionHeader}>
            <TextComponent size={15}>
              Oferecemos vários tipos de investimentos, confira os principais
            </TextComponent>

            {data.map(investments => (
              <View style={styles.investmentsCardView}>
                <InvestmentCard
                  title={investments.name}
                  description={investments.description}
                  key={investments.id}
                  functionPress={() => {
                    investments.id == 1
                      ? navigation.navigate('CLBRPage')
                      : showModal();
                  }}
                  functionPressCard={() => {
                    investments.id == 1
                      ? navigation.navigate('CLBRPage')
                      : showModal();
                  }}
                />
              </View>
            ))}
            <View style={styles.finalTextView}>
              <Button onPress={() => showModal()}>Ver mais</Button>
            </View>
          </View>
        </View>
      </ScrollView>
      <ModalComponent
        show={visible}
        close={hideModal}
        modalText="Vimos aqui que você é iniciante, recomendamos que você invista no fundo CLBR1"
        modalAnimation={modalAnimation}
      />
    </SafeAreaView>
  );
}

export default memo(AvaliableInvestments);
