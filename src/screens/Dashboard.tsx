import React from "react";
import {
  View,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import TextComponent from "../components/TextComponent";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import Card from "../components/Card";
import Logo from "../components/Logo";

const Home = (props) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.icons}>
          <MaterialIcons
            name="menu"
            size={24}
            color="black"
            onPress={() => props.navigation.toggleDrawer()}
          />
          <Ionicons name="md-notifications-outline" size={24} color="black" />
        </View>

        <View style={{ marginTop: 32 }}>
          <TextComponent size={34}>Bem vindo.</TextComponent>
        </View>

        <View style={styles.portfolio_container}>
          <View style={styles.portfolio}>
            <View style={styles.portfolio_header}>
              <TextComponent size={16} color={"#fff"} weight={"bold"}>
                Seu total de Tokens
              </TextComponent>
            </View>

            <View style={styles.portfolio_content}>
              <TextComponent size={32} color={"#fff"} weight={"bold"}>
                R$120,00
              </TextComponent>

              <View style={styles.invest}>
                <TouchableOpacity activeOpacity={0.6}>
                  <TextComponent size={14} color="#31A078" spacing={1} weight={"bold"}>
                    Investir agora
                  </TextComponent>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.plans_container}>
          <TextComponent size={22} weight={"bold"}>
            Melhores ações
          </TextComponent>

          <TouchableOpacity>
            <View style={styles.see_all}>
              <TextComponent color="#FE555D" size={18}>
                Ver todos
              </TextComponent>

              <View style={{ paddingLeft: 7 }}>
                <AntDesign name="arrowright" size={24} color="#FE555D" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <Card />

        <View style={styles.guide_container}>
          <TextComponent size={22} weight={"bold"}>
            Dicas de como investir
          </TextComponent>

          <View style={styles.guide}>
            <View>
              <View style={styles.guide_header}>
                <TextComponent size={18} weight={"bold"} color={"#4F4F4F"} spacing={1}>
                  Tipos básicos de investimento
                </TextComponent>
              </View>

              <View style={styles.guide_description}>
                <TextComponent size={14} color={"#4F4F4F"} spacing={1}>
                  Lorem ipsum dolor
                </TextComponent>
              </View>
            </View>

            <View style={styles.guide_ellipse}>
              <Image source={require("../assets/ellipse.png")} />
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#4A4A4A",
              borderBottomWidth: 1,
            }}
          />
          <View style={styles.guide}>
            <View>
              <View style={styles.guide_header}>
                <TextComponent size={18} weight={"bold"} color={"#4F4F4F"} spacing={1}>
                  Como eu posso começar?
                </TextComponent>
              </View>

              <View style={styles.guide_description}>
                <TextComponent size={14} color={"#4F4F4F"} spacing={1}>
                  Acho que primeiro de tudo, você pode pensar em aceitar meu pedido
                </TextComponent>
              </View>
            </View>

            <View style={styles.guide_ellipse}>
              <Image source={require("../assets/ellipse2.png")} />
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
    flex: 1
  },
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  icons: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  portfolio_container: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  portfolio: {
    width: 354,
    height: 146,
    borderRadius: 20,
    backgroundColor: "#258B66",
    marginTop: 40,
  },
  portfolio_header: {
    paddingTop: 33,
    paddingBottom: 22,
    paddingLeft: 12,
  },
  portfolio_content: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  invest: {
    backgroundColor: "#fff",
    width: 125,
    height: 40,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  plans_container: {
    marginTop: 47,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  guide_container: {
    marginTop: 20,
  },
  guide: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  guide_header: {
    paddingBottom: 10,
    width: 271,
  },
  guide_description: {
    paddingBottom: 19,
    width: 281,
  },
  guide_ellipse: {
    alignItems: "center",
    flexDirection: "row",
  },
  see_all: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
