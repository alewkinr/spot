import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Dimensions, Text } from "react-native";
import { Header } from "../components/Header";

export const Travel = () => {
  const Mock = {
    emoji: "⛩️",
    cost: 100000,
    valute: "₽",
    duration: "20",
    name: "Путешествие в Азию",
    type: "самостоятельный маршрут",
    desc: "Мы, с компанией друзей, решили посетить удивительное по колориту Азию. Приглашаем и вас в наше путешествие, будем рады новым знакомствам",
    map: "",
    places: [{
      country: "Южная Корея",
      cities: ["Сеул", "Тегу"],
    },
    {
      country: "Япония",
      cities: ["Осака", "Токио", "Нагоя"],
    },{
      country: "Китай",
      cities: ["Пекин", "Шанхай"],
    },
  ],
    lastComments: [{
      nickname: 'kosokrivo',
      text: 'Топовый вариант за свои деньги, хочу с вами',
    },
    {
      nickname: 'pryamo',
      text: 'Тоже хочу с вами',
    }
  ],
  organizator: {
    nickname: 'helki',
    userpic: '',
  },
  members: [{
    nickname: 'yetrandom',
    userpic: ''
  },
  {
    nickname: 'anotherday',
    userpic: ''
  }]
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Text style={{ textAlign: "center", marginTop: 30, fontSize: 15, }}>14.06 - 3.07 2021</Text>
      </Header>

      <ScrollView style={styles.containerScrollView}>
        <View>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efefef",
    flex: 1,
    minHeight: Math.round(Dimensions.get("window").height),
    paddingTop: 40,
  },
  containerScrollView: {
    backgroundColor: "#efefef",
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
  }
});
