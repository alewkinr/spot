import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../Themed";
import { convertToFormat } from "../../utils/money-tools"
import { timeConverter } from "../../utils/time-tools"
import { countCities, concatCities } from "../../utils/data-tools"

const RouteCardBody = (props) => {
    const { id, cost, from, to, destinations, author_id, companions } = props.item
    const countCountries = destinations.length;
    return (
            <View
                style={styles.body}
            >
                <Text>{`${convertToFormat(cost)} ₽`}</Text>
                <Text>{`${timeConverter(from)} — ${timeConverter(to)}`}</Text>
                <Text>{`${20} дней`}</Text>
                <Text>{`${countCountries} стран ${countCities(destinations)} городов`}</Text>
                {destinations.map((val) => {
                    return (
                        <><Text>{`${val["country"]}: ${concatCities(val["cities"])}`}</Text></>
                    )
                })}
            </View>

)}

const styles = StyleSheet.create({
    body: {
        marginVertical: 4,
    },
})

export { RouteCardBody }
