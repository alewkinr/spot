import React, {useState} from "react";
import {View, StyleSheet, SafeAreaView, Text, TextInput} from "react-native";
import {List} from "@ui-kitten/components";
import {Dimensions} from "react-native";
import {RouteCard} from "../components/RouteCard/RouteCard"
import {Ionicons} from "@expo/vector-icons";


const RoutesList = ({navigation}) => {
    const [searchField, setSearchField] = useState('')
    // todo: fill with data from backend
    const data = new Array(1).fill({
        navigation: navigation,
        title: "Путешествие в Азию",
        type: "самостоятельный маршрут",
        icon: "⛩",
        id: 123,
        cost: 100000,
        from: new Date(),
        to: new Date(),
        destinations: [
            {
                country: "Южная Корея",
                cities: ["Сеул", "Тэгу"],
            },
            {
                country: "Япония",
                cities: ["Осака", "Токио", "Нагоя"],
            },
            {
                country: "Китай",
                cities: ["Пекин", "Шанхай"],
            }
        ],
        author_id: 123,
        companions: [456, 789]
    });

    return (
        <View>
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
                        right: 25,
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
            <List horizontal={false}
                  style={styles.list}
                  contentContainerStyle={styles.item}
                  data={data}
                  renderItem={RouteCard}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        minHeight: Math.round(Dimensions.get("window").height),
        width: Dimensions.get("window").width
    },
    item: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        minHeight: Math.round(Dimensions.get("window").height),
    },
    list: {
        maxHeight: Dimensions.get("window").height
    }
});
export {RoutesList};
