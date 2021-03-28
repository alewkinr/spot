import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    useWindowDimensions,
    Dimensions,
    TextInput,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Ionicons} from "@expo/vector-icons";
import {Col, Row, Grid} from "react-native-easy-grid";
import CheckBox from "../components/CheckBox";

const MainScreen = () => {
    const navigation = useNavigation();
    const [searchField, setSearchField] = useState('')

    const [directions, setDirections] = useState([
        {
            id: 1,
            title: 'Азия',
            img: require("../assets/img/places/1.png"),
            checked: false
        },
        {
            id: 2,
            title: 'Европа',
            img: require("../assets/img/places/2.png"),
            checked: false
        },
        {
            id: 3,
            title: 'Африка',
            img: require("../assets/img/places/3.png"),
            checked: false
        },
        {
            id: 4,
            title: 'Северная Америка',
            img: require("../assets/img/places/4.png"),
            checked: false
        },
        {
            id: 5,
            title: 'Южная Америка',
            img: require("../assets/img/places/5.png"),
            checked: false
        },
        {
            id: 6,
            title: 'Австралия',
            img: require("../assets/img/places/6.png"),
            checked: false
        },
    ]);
    const [targets, setTargets] = useState([
        {
            id: 1,
            title: 'Семья',
            img: require("../assets/img/places/1.png"),
            checked: false
        },
        {
            id: 2,
            title: 'Отдых',
            img: require("../assets/img/places/2.png"),
            checked: false
        },
        {
            id: 3,
            title: 'Бизнес',
            img: require("../assets/img/places/3.png"),
            checked: false
        },
        {
            id: 4,
            title: 'Тематический',
            img: require("../assets/img/places/4.png"),
            checked: false
        },
        {
            id: 5,
            title: 'Спорт',
            img: require("../assets/img/places/5.png"),
            checked: false
        },
    ]);
    const [interesting, setInteresting] = useState([
        {
            id: 1,
            title: 'История',
            img: require("../assets/img/places/1.png"),
            checked: false
        },
        {
            id: 2,
            title: 'Природа',
            img: require("../assets/img/places/2.png"),
            checked: false
        },
        {
            id: 3,
            title: 'Вечеринки',
            img: require("../assets/img/places/3.png"),
            checked: false
        },
        {
            id: 4,
            title: 'Культура',
            img: require("../assets/img/places/4.png"),
            checked: false
        },
        {
            id: 5,
            title: 'Работа',
            img: require("../assets/img/places/5.png"),
            checked: false
        },
        {
            id: 6,
            title: 'Хобби',
            img: require("../assets/img/places/6.png"),
            checked: false
        },
    ]);

    const [showNext, setShowNext] = useState(false)

    useEffect(() => {
        const checkedDirectionsSum = directions.filter(i => i.checked === true).length
        const checkedTargetsSum = targets.filter(i => i.checked === true).length
        const checkedInterestsSum = interesting.filter(i => i.checked === true).length
        const sum = checkedDirectionsSum + checkedTargetsSum + checkedInterestsSum
        sum >= 3 ? setShowNext(true) : setShowNext(false)
    }, [directions, targets, interesting])

    function changeDirections(id) {
        setDirections(directions.map(item => {
                if (item.id === id) {
                    item.checked = !item.checked
                }
                return item
            }
        ))
    }

    function changeTargets(id) {
        setTargets(targets.map(item => {
                if (item.id === id) {
                    item.checked = !item.checked
                }
                return item
            }
        ))
    }

    function changeInterests(id) {
        setInteresting(interesting.map(item => {
                if (item.id === id) {
                    item.checked = !item.checked
                }
                return item
            }
        ))
    }

    return (
        <View style={styles.container}>
            <View style={{
                paddingTop: 50,
                paddingBottom: 25,
                paddingHorizontal: 12,
                backgroundColor: '#fff',
                borderRadius: 30
            }}>
                <Text style={styles.text}>
                    Выберите любимые темы и места, которые хотите посетить: 3 или более
                </Text>
                <View style={{
                    marginTop: 30,
                    backgroundColor: '#ECEFF5',
                    borderRadius: 30
                }}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Поиск"
                        value={searchField}
                        placeholderTextColor={"#95A0B3"}
                        onChangeText={setSearchField}
                    />
                    <Ionicons size={18} style={{position: 'absolute', top: 10, left: 15}} name={"search-outline"}
                              color={"#95A0B3"}/>
                </View>
            </View>
            <View style={{flex: 1}}>
                <View style={{flex: 1, width: (Dimensions.get('window').width)}}>
                    <ScrollView style={{paddingTop: 20}}>
                        <View>
                            <Text style={styles.title}>
                                Направления
                            </Text>
                            <Grid style={{flex: 1}}>
                                <Row style={{paddingTop: 30}}>
                                    {directions.slice(0, 3).map((item) => (
                                            <Col key={item.id}>
                                                <TouchableOpacity onPress={() => changeDirections(item.id)}>
                                                    <View style={{
                                                        flex: 1,
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        <Image source={item.img}/>
                                                        <Text style={{
                                                            fontFamily: 'SFProDisplayRegular',
                                                            fontSize: 14,
                                                            paddingTop: 15
                                                        }}>
                                                            {item.title}
                                                        </Text>
                                                    </View>
                                                    <CheckBox checked={item.checked}/>
                                                </TouchableOpacity>
                                            </Col>
                                        )
                                    )
                                    }
                                </Row>
                                <Row style={{paddingTop: 29}}>
                                    {directions.slice(3, 6).map((item) => (
                                            <Col key={item.id}>
                                                <TouchableOpacity onPress={() => changeDirections(item.id)}>
                                                    <View style={{
                                                        flex: 1,
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        <Image source={item.img}/>
                                                        <Text style={{
                                                            fontFamily: 'SFProDisplayRegular',
                                                            fontSize: 14,
                                                            paddingTop: 15,
                                                            width: 100,
                                                            textAlign: 'center'
                                                        }}>
                                                            {item.title}
                                                        </Text>
                                                    </View>
                                                    <CheckBox checked={item.checked}/>
                                                </TouchableOpacity>
                                            </Col>
                                        )
                                    )
                                    }
                                </Row>
                            </Grid>

                        </View>
                        <View style={{paddingTop: 50}}>
                            <Text style={styles.title}>
                                Цель поездки
                            </Text>
                            <Grid style={{flex: 1}}>
                                <Row style={{paddingTop: 30}}>
                                    {targets.slice(0, 3).map((item) => (
                                            <Col key={item.id}>
                                                <TouchableOpacity onPress={() => changeTargets(item.id)}>
                                                    <View style={{
                                                        flex: 1,
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        <Image source={item.img}/>
                                                        <Text style={{
                                                            fontFamily: 'SFProDisplayRegular',
                                                            fontSize: 14,
                                                            paddingTop: 15
                                                        }}>
                                                            {item.title}
                                                        </Text>
                                                    </View>
                                                    <CheckBox checked={item.checked}/>
                                                </TouchableOpacity>
                                            </Col>
                                        )
                                    )
                                    }
                                </Row>
                                <Row style={{paddingTop: 29}}>
                                    {targets.slice(3, 5).map((item) => (
                                            <Col key={item.id}>
                                                <TouchableOpacity onPress={() => changeTargets(item.id)}>
                                                    <View
                                                        style={{justifyContent: 'space-between', alignItems: 'center'}}>
                                                        <Image source={item.img}/>
                                                        <Text style={{
                                                            fontFamily: 'SFProDisplayRegular',
                                                            fontSize: 14,
                                                            paddingTop: 15,
                                                            width: 100,
                                                            textAlign: 'center'
                                                        }}>
                                                            {item.title}
                                                        </Text>
                                                    </View>
                                                    <CheckBox checked={item.checked}/>
                                                </TouchableOpacity>
                                            </Col>
                                        )
                                    )
                                    }
                                    <Col/>
                                </Row>
                            </Grid>
                        </View>

                        <View style={{paddingTop: 50, paddingBottom: 80}}>
                            <Text style={styles.title}>
                                Интерес
                            </Text>
                            <Grid style={{flex: 1}}>
                                <Row style={{paddingTop: 30}}>
                                    {interesting.slice(0, 3).map((item) => (
                                            <Col key={item.id}>
                                                <TouchableOpacity onPress={() => changeInterests(item.id)}>
                                                    <View style={{
                                                        flex: 1,
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        <Image source={item.img}/>
                                                        <Text style={{
                                                            fontFamily: 'SFProDisplayRegular',
                                                            fontSize: 14,
                                                            paddingTop: 15
                                                        }}>
                                                            {item.title}
                                                        </Text>
                                                    </View>
                                                    <CheckBox checked={item.checked}/>
                                                </TouchableOpacity>
                                            </Col>
                                        )
                                    )
                                    }
                                </Row>
                                <Row style={{paddingTop: 29}}>
                                    {interesting.slice(3, 6).map((item) => (
                                            <Col key={item.id}>
                                                <TouchableOpacity onPress={() => changeInterests(item.id)}>
                                                    <View
                                                        style={{justifyContent: 'space-between', alignItems: 'center'}}>
                                                        <Image source={item.img}/>
                                                        <Text style={{
                                                            fontFamily: 'SFProDisplayRegular',
                                                            fontSize: 14,
                                                            paddingTop: 15,
                                                            width: 100,
                                                            textAlign: 'center'
                                                        }}>
                                                            {item.title}
                                                        </Text>
                                                    </View>
                                                    <CheckBox checked={item.checked}/>
                                                </TouchableOpacity>
                                            </Col>
                                        )
                                    )
                                    }
                                </Row>
                            </Grid>
                        </View>
                    </ScrollView>

                </View>

                {showNext &&
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 30,
                    right: 35,
                    backgroundColor: '#BED600',
                    paddingHorizontal: 18,
                    paddingVertical: 12,
                    borderRadius: 30
                }} onPress={() => navigation.navigate("Main")}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                        fontFamily: 'SFProDisplayRegular',
                        paddingRight: 10,
                        fontWeight: '600'
                    }}>Продолжить</Text>
                    <Ionicons name={'airplane'} size={20} color={'#fff'}/>
                </TouchableOpacity>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            minHeight: Math.round(Dimensions.get('window').height),
            flex: 1,
            backgroundColor: '#E5E5E5',

        }
        ,
        textInput: {
            fontFamily: "SFProDisplayRegular",
            width: "100%",
            fontSize: 16,
            color: "#000",
            paddingLeft: 40,
            paddingVertical: 7,
            height: 40,

        }
        ,
        text: {
            color: 'black',
            fontFamily: 'SFProDisplayBold',
            fontWeight: 'bold',
            fontSize: 24
        },
        title: {
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'SFProDisplayBold'
        }
    }
);


export {MainScreen};
