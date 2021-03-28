import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { RouteCardHeader } from "./RouteCardHeader"
import { RouteCardFooter } from "./RouteCardFooter"
import { RouteCardBody } from "./RouteCardBody"

const RouteCard = (props) => {
    const onPress = () => props.item.navigation.navigate("RouteScreen", {
        id: props.item.index,
    })

    return (
            <View
                key={`card-${props.item.id}`}
                style={styles.item}
                onPress={ onPress }
            >
                <RouteCardHeader key={`head-${props.item.id}`} item={props.item}/>
                <RouteCardBody key={`body-${props.item.id}`} item={props.item}/>
                <RouteCardFooter key={`footer-${props.item.id}`}/>
            </View>

)}

const styles = StyleSheet.create({
    item: {
        marginVertical: 4,
        width:  Math.round(Dimensions.get("window").width),
    },
})

export { RouteCard }
