import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet, Dimensions, Text } from "react-native";
import { Header } from "../components/Header";
import { CircledText } from "../components/CircledText";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    }, {
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
          <View>
            <Text>{Mock.cost}{" "}{Mock.valute}</Text>
            <CircledText />
            <Text>{Mock.duration} дней</Text>
          </View>
          <View>
            <Text>{Mock.name}</Text>
            <Text>{Mock.type}</Text>
          </View>
          <Text>{Mock.desc}</Text>
          <View>
            {/* Map goes here */}
          </View>
          <Text>{Mock.cities.length} страны, 7 городов</Text>

          <TouchableOpacity>
            <Text>Подробнее</Text>
          </TouchableOpacity>

          <Text>Комментарии</Text>
          <View>
            <Text>kosokrivo</Text>
            <Text>Топовый вариант</Text>
          </View>

          <TouchableOpacity>
            <Text>Посмотреть все комментарии</Text>
          </TouchableOpacity>

          <View>
            <Text>Организатор</Text>
            <View>
              {/* Pick */}
              <Text>helki</Text>
            </View>
          </View>
          <View>
            <Text>Участники</Text>
            <View>
              {/* Pick */}
              <Text>helki</Text>
            </View>
          </View>
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
