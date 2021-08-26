import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Timeline from 'react-native-timeline-flatlist-mg';
import styles from './styles';
import timelineData from './data';
import TextComponent from '../../components/TextComponent';
import { theme } from '../../core/theme';
import { Button } from 'react-native-paper';

export default class ClebellyTimeline extends Component {
  constructor() {
    super();
    this.onEventPress = this.onEventPress.bind(this);
    this.renderSelected = this.renderSelected.bind(this);

    this.data = timelineData;
    this.state = { selected: null };
  }

  onEventPress(data) {
    this.setState({ selected: data });
  }

  renderSelected() {
    if (this.state.selected)
      return (
        <Text style={{ marginTop: 10 }}>
          Selected event: {this.state.selected.title} at{' '}
          {this.state.selected.time}
        </Text>
      );
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextComponent size={28} weight="bold">
            "Clebelly" Timeline 😙❤️
          </TextComponent>
        </View>
        {this.renderSelected()}
        <Timeline
          style={styles.list}
          data={this.data}
          circleSize={20}
          circleColor="rgba(0,0,0,0)"
          titleStyle={{ color: '#fff' }}
          lineColor="rgb(45,156,219)"
          timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: theme.colors.secondary,
            color: 'white',
            padding: 5,
            borderRadius: 13,
          }}
          descriptionStyle={{ color: '#ffff' }}
          options={{
            style: { paddingTop: 5 },
          }}
          onEventPress={this.onEventPress}
          separator={false}
          detailContainerStyle={{
            marginBottom: 20,
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: theme.colors.primary,
            borderRadius: 10,
          }}
          columnFormat="two-column"
        />
        <Button
          onPress={() => this.props.navigation.navigate('ClebellyMoments')}
          style={{marginTop: 20, marginBottom: 20}}
        >
          Clebelly Moments
        </Button>
      </View>
    );
  }
}
