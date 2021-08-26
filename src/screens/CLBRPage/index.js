import React, { Component } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  Animated,
  Vibration,
  TouchableWithoutFeedback,
} from 'react-native';
import { Text, Headline, Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import styles from './styles.js';

import TextComponent from '../../components/TextComponent';

// Importando a data das animaçoes do Lottie
import data from './AnimationData';

const { width } = Dimensions.get('screen');

class CLBRPage extends Component {
  constructor(props) {
    super(props);
    this.flatList = null;
    this.index = new Animated.Value(0);
  }

  renderScreen(item, index) {
    return (
      <View style={styles.innerView}>
        <View
          style={{
            width: width,
            height: width / 1.5,
          }}
        >
          <LottieView source={item.source} autoPlay />
        </View>
        <TextComponent size={25} align="center">
          {item.header}
        </TextComponent>

        <View style={{ marginTop: 10 }}>
          <TextComponent size={15} align="center">
            {item.body}
          </TextComponent>
        </View>

        <Button
          mode="contained"
          labelStyle={styles.fontSmall}
          style={styles.entrar}
          onPress={
            index === data.length - 1
              ? () => this.props.navigation.navigate('ClebellyTimeline')
              : () =>
                  this.flatList.scrollToIndex({
                    animated: true,
                    index: index + 1,
                  })
          }
        >
          {index === data.length - 1 ? 'Resgatar' : 'Proximo'}
        </Button>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.landingContainer}>
        <View style={styles.dotContainer}>
          {data.map((_, i) => {
            return (
              <TouchableWithoutFeedback
                key={i}
                onPress={() =>
                  this.flatList.scrollToIndex({ animated: true, index: i })
                }
              >
                <Animated.View
                  style={{
                    opacity: this.index.interpolate({
                      inputRange: [i - 1, i, i + 1],
                      outputRange: [0.3, 1, 0.3],
                      extrapolate: 'clamp',
                    }),
                    height: 10,
                    width: 10,
                    backgroundColor: 'white',
                    margin: 6,
                    borderRadius: 5,
                  }}
                />
              </TouchableWithoutFeedback>
            );
          })}
        </View>
        <FlatList
          ref={r => (this.flatList = r)}
          style={{}}
          contentContainerStyle={{
            alignItems: 'stretch',
          }}
          data={data}
          keyExtractor={item => item.header}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index, navigation }) =>
            this.renderScreen(item, index, navigation)
          }
          onScroll={({ nativeEvent }) => {
            this.index.setValue(nativeEvent.contentOffset.x / width);
            Vibration.vibrate(1);
          }}
        />
      </View>
    );
  }
}

export default CLBRPage;
