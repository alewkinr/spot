import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../Themed";
import Colors from "../../constants/Colors";
import { CircledText } from "../CircledText";

const RouteCardHeader = (props) => (
    <View style={styles.container}>
        <CircledText style={styles.icon}>{props.item.icon}</CircledText>
        <Text style={styles.title}>{props.title}
            <Text style={styles.subtitle}>{props.type}</Text>
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-start",
    },
    icon: {
      width: 40
    },
    subtitle: {
        color: Colors.light.subtitle,
        fontSize: 14,
        lineHeight: 17,
        textAlign: "left",
    },
    title: {
        color: Colors.light.text,
        fontSize: 16,
        lineHeight: 19,
        marginVertical: 4,
        textAlign: "left",
        width: 100,
    }
})

export { RouteCardHeader }
