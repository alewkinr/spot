import React, { useState } from "react";
import { View, TouchableOpacity, SafeAreaView, Image, StyleSheet, Text, Dimensions } from "react-native";
import RightChevron from '../components/svg/RightChevron';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { CircledText } from "../components/CircledText";

export const Main = () => {
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
      containerTitleAndText: {
        flexDirection: "row",
        width: "100%",
      },
      chevron: {
        height: 15,
        right: 16,
        top: 15,
        width: 15,
      },
      containerImages: {
        marginTop: 20,
        marginBottom: 45,
      },
      image: {
        height: 240, 
        marginRight: 15,
        resizeMode: "cover", 
        width: 140,
      },
      subTitleText: {
        color: "#9BA2AE",
        fontSize: 15,
      },
      titleText: {
        fontSize: 18,
      }
    });

    const onPress = () => {
      console.log("Pressed");
    }

    return (
      <View style={styles.container} {...props}>
        <TouchableOpacity onPress={onPress} style={styles.containerTitle}>
          <View style={styles.containerTitleAndText}>
            <CircledText>{emoji}</CircledText>
            <View style={styles.containerText}>
              <Text style={styles.titleText}>{name}</Text>
              <Text style={styles.subTitleText}>популярные {desc}</Text>
            </View>
          </View>
          <RightChevron style={styles.chevron} />
        </TouchableOpacity>
        <ScrollView style={styles.containerImages} horizontal>
          { 
            Array(12).fill(null).map((_, index) => <Image key={index} style={styles.image}
              source={{ uri: "https://picsum.photos/500/300" 
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
