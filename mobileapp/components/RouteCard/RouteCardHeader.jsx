import React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "../Themed";
import Colors from "../../constants/Colors";
import {CircledText} from "../CircledText";
import RightChevron from "../svg/RightChevron";

const RouteCardHeader = (props) => (
    <View style={styles.container}>
        <CircledText style={styles.icon}>{props.item.icon}</CircledText>
        <View style={{marginRight: 120}}>
            <Text style={styles.title}>{props.item.title}</Text>
            <Text style={styles.subtitle}>{props.item.type}</Text>
        </View>
        <RightChevron width={16} height={16}/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 10
    },
    icon: {
        width: 40
    },
    subtitle: {
        color: Colors.light.subtitle,
        fontSize: 14,
        lineHeight: 14,
        textAlign: "left",
    },
    title: {
        color: Colors.light.text,
        fontSize: 16,
        textAlign: "left",

    }
})

export {RouteCardHeader}
