import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
    safeAreaView: {
        flex: 1,
      },
      container: {
        flex: 1,
        marginTop: width / 6,
        paddingLeft: width / 10,
        paddingRight: width / 10,
        marginBottom: width / 20
      },
      descriptionHeader: {
        marginTop: width/ 35
      },
      investmentsCardView: {
        marginTop: width/ 30,
        marginBottom: width/ 120
      },
      finalTextView: {
        display: 'flex',
        marginTop: width /28,
        alignItems: 'center'
      }
})

