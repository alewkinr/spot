import React, {useState} from "react";
import {View, TouchableOpacity, SafeAreaView, StyleSheet, Text, Dimensions, TextInput} from "react-native";
import RightChevron from '../components/svg/RightChevron';
import {useNavigation} from "@react-navigation/native";
import {ScrollView} from "react-native-gesture-handler";
import {CircledText} from "../components/CircledText";
import {Image} from 'react-native-expo-image-cache'
import {Ionicons} from "@expo/vector-icons";

export const Main = () => {
    const navigation = useNavigation();
    const [content, setContent] = useState("recomendations"); // routes | travelers
    const [searchField, setSearchField] = useState('')
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
        return <View style={{height: 1.5, backgroundColor: "#E5E8ED"}}/>;
    }

    const ThemeCard = ({name, desc, emoji, ...props}) => {
        const styles = StyleSheet.create({
            container: {
                alignSelf: "flex-start",
                backgroundColor: "#ECEFF5",
                flexDirection: "column",
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
            navigation.navigate("RoutesListStackNavigation")
        }

        return (


            <View {...props} style={{flex: 1, marginBottom: 10, }}>

                <TouchableOpacity onPress={onPress} style={styles.containerTitle}>
                    <View style={styles.containerTitleAndText}>
                        <CircledText>{emoji}</CircledText>
                        <View style={styles.containerText}>
                            <Text style={styles.titleText}>{name}</Text>
                            <Text style={styles.subTitleText}>популярные {desc}</Text>
                        </View>
                    </View>
                    <RightChevron style={styles.chevron}/>
                </TouchableOpacity>
                <ScrollView style={styles.containerImages} horizontal>
                    {
                        Array(12).fill(null).map((_, index) => <Image key={index} style={styles.image}
                                                                      {...{
                                                                          preview: "https://picsum.photos/500/300",
                                                                          uri: "https://picsum.photos/500/300"
                                                                      }} />
                        )}
                </ScrollView>
                <Divider/>
            </View>
        )
            ;
    }

    const WithRecomendations = recomendations.map((props, index) => {
        return <ThemeCard key={index + props?.name} {...props} />
    });

    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: '#fff',
                borderRadius: 30,
                paddingTop: 60,
                paddingBottom: 30,
                paddingHorizontal: 20
            }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'black',
                        fontFamily: 'SFProDisplayBold',
                        fontWeight: 'bold',
                        fontSize: 14
                    }}>
                        Рекомендации
                    </Text>

                    <Text style={{
                        textAlign: 'center',
                        color: 'black',
                        fontFamily: 'SFProDisplayBold',
                        fontWeight: 'bold',
                        fontSize: 14
                    }}>
                        Маршруты
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        color: 'black',
                        fontFamily: 'SFProDisplayBold',
                        fontWeight: 'bold',
                        fontSize: 14
                    }}>
                        Попутчики
                    </Text>
                    <View style={{
                        position: 'absolute',
                        bottom: -15,
                        left: 36,
                        width: 20,
                        height: 4,
                        backgroundColor: '#BED600',
                        borderRadius: 30
                    }}/>
                </View>

                <View style={{
                    // paddingTop: 50,

                    marginTop: 50,
                    backgroundColor: '#ECEFF5',
                    borderRadius: 30
                }}>
                    <TextInput
                        style={{
                            fontFamily: "SFProDisplayRegular",
                            width: "100%",
                            fontSize: 16,
                            color: "#000",
                            paddingLeft: 40,
                            paddingVertical: 7,
                            height: 40,
                        }}
                        placeholder="Поиск"
                        value={searchField}
                        placeholderTextColor={"#95A0B3"}
                        onChangeText={setSearchField}
                    />
                    <Ionicons size={18} style={{position: 'absolute', top: 10, left: 15}} name={"search-outline"}
                              color={"#95A0B3"}/>
                </View>
            </View>
            <ScrollView style={styles.scrollViewContainer}>
                {WithRecomendations}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#efefef",
        flex: 1,
        // minHeight: Math.round(Dimensions.get("window").height),
    },
    scrollViewContainer: {
        paddingTop: 20,
        paddingHorizontal: 20,
    }
});
