import React from "react";
import View from "react-native-web/src/exports/View";
import { Text } from "./Themed"
import Dimensions from "react-native-web/src/exports/Dimensions";

const styles = StyleSheet.create({
    container: {
        alignItems: "baseline",
        flexDirection: "row",
        fontFamily: "SFProDisplayBold",
        justifyContent: "space-between",
        marginTop: 30,
        padding: 10,
        width: Dimensions.get("window").width
    },
    text: {
        alignItems: "center",
        display: "flex",
        fontFamily: "SFProDisplayBold",
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 38,
    },
});

export function ScreenTitle(props) {
    return (
        <View style={styles.container}>
            <Text {...props} style={styles.text}/>
        </View>
    );
}
