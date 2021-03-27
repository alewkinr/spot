import React, { useState } from "react";
import { View, SafeAreaView, Image, StyleSheet, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { CircledText } from "../components/CircledText";

const Main = () => {
  // const navigation = useNavigation();
  const [content, setContent] = useState("recomendations"); // routes | travelers

  const recomendations = [
    {
      name: "Италия",
      desc: "страны",
      emoji: "🇮🇹",
    },
    {
      name: "Архитектура",
      desc: "интересы",
      emoji: "⛩️",
    },
    {
      name: "Кофе",
      desc: "интересы",
      emoji: "☕️",
    },
  ];
  
  const Divider = () => {
    return <View style={{ height: 1.5, backgroundColor: "#E5E8ED" }} />;
  }

  const ThemeCard = ({ name, desc, emoji, ...props }) => {
    const styles = StyleSheet.create({
      container: {
        alignSelf: "flex-start",
        backgroundColor: "#ECEFF5",
        flexDirection: "column",
        marginVertical: 20,
        width: "100%",
      },
      containerText: {
        marginTop: 4,
      },
      containerTitle: {
        flexDirection: "row",
        width: "100%",
      },
      containerImages: {
        marginTop: 20,
        marginBottom: 45,
      },
      image: {
        height: 280, 
        marginRight: 15,
        resizeMode: "cover", 
        width: 150,
      },
      subTitleText: {
        color: "#9BA2AE",
        fontSize: 15,
      },
      titleText: {
        fontSize: 18,
      }
    });

    return (
      <View style={styles.container} {...props}>
        <View style={styles.containerTitle}>
          <CircledText>{emoji}</CircledText>
          <View style={styles.containerText}>
            <Text style={styles.titleText}>{name}</Text>
            <Text style={styles.subTitleText}>популярные {desc}</Text>
          </View>
        </View>
        <ScrollView style={styles.containerImages} horizontal>
          { 
            Array(12).fill(null).map((_, index) => <Image key={index} style={styles.image}
              source={{ uri: "https://picsum.photos/600/300" 
            }} />
          )}
        </ScrollView>
        <Divider />
      </View>
    );
  }

  const WithRecomendations = recomendations.map((props, index) => {
    return <ThemeCard key={index + props?.name} {...props} />
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ alignSelf: "center" }}>Main</Text>
      <ScrollView style={styles.scrollViewContainer}>
        {WithRecomendations}
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
  scrollViewContainer: {
    paddingHorizontal: 20,
  }
});


export { Main };
