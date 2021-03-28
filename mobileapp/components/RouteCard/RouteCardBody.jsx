import React from "react";
import {StyleSheet, View, Dimensions, Image} from "react-native";
import {Text} from "../Themed";
import {convertToFormat} from "../../utils/money-tools"
import {timeConverter, dateShortener} from "../../utils/time-tools"
import {countCities, concatCities} from "../../utils/data-tools"
import DotDivider from "../DotDivider";

const RouteCardBody = (props) => {
    const {id, cost, from, to, destinations, author_id, companions} = props.item
    const countCountries = destinations.length;
    return (
        <View style={styles.body} key={id}>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingTop: 10}}>
                <Text style={styles.text}>{`${convertToFormat(cost)} ₽`}</Text>
                <DotDivider/>
                <Text>{`${dateShortener(from)} - ${timeConverter(to)}`}</Text>
                <DotDivider/>
                <Text>{`${20} дней`}</Text>
            </View>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 13, alignItems: 'center', flexWrap: 'wrap'}}>
                <Text style={{lineHeight: 17}}>{`${countCountries} стран ${countCities(destinations)} городов`}</Text>
                <DotDivider/>
                    {destinations.map((val, index) => {
                        return (<>
                                <Text style={{lineHeight: 40}}>{`${val["country"]}: `}</Text>
                                <Text style={{color: '#9BA2AE'}}>{`${concatCities(val["cities"])}`}</Text>
                                {index !== destinations.length - 1 && <DotDivider/> }
                            </>
                        )
                    })}

            </View>
            <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
                <Image source={require("../../assets/img/users/1.png")}/>
                <Image style={{marginHorizontal: 16}} source={require("../../assets/img/users/2.png")}/>
                <Image source={require("../../assets/img/users/3.png")}/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        marginVertical: 4,
        width: Dimensions.get('window').width,

    },
    text: {
        fontFamily: 'SFProDisplayRegular',
        fontSize: 14

    }
})

export {RouteCardBody}
