import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import TextComponent from "../components/TextComponent";

const Card = (props) => {
  return (
    <>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollToOverflowEnabled={true}
      >
        <View style={styles.card_container}>
          <TouchableOpacity activeOpacity={0.6}>
            <Image source={require("../assets/currencies/dolar.png")} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={{ paddingLeft: 5 }}>
            <Image source={require("../assets/currencies/euro.png")} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={{ paddingLeft: 5 }}>
            <Image source={require("../assets/currencies/bitcoin.png")} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={{ paddingLeft: 5 }}>
            <Image source={require("../assets/currencies/dolar.png")} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={{ paddingLeft: 5 }}>
            <Image source={require("../assets/currencies/euro.png")} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={{ paddingLeft: 5 }}>
            <Image source={require("../assets/currencies/bitcoin.png")} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 0,
    marginBottom: 0,
    // width: 200,
    height: 210,
  },
  card_container: {
    // width: 134,
    // height: 170,
    // borderRadius: 10,
    flexDirection: "row",
  },
  card: {
    // paddingLeft: 9,
    flexDirection: "row",
  },
});

export default Card;
