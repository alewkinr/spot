import React from "react";
import View from "react-native-web/src/exports/View";
import { Text } from "./Themed"
import Dimensions from "react-native-web/src/exports/Dimensions";

const styles = StyleSheet.create({
    container: {
        fontFamily: "SFProDisplayBold",
        marginTop: 30,
        flexDirection: "row",
        alignItems: 'baseline',
        padding: 10,
        width: Dimensions.get("window").width,
        justifyContent: "space-between"
    },
    text: {
        fontFamily: "SFProDisplayBold",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 30,
        lineHeight: 38,
        display: "flex",
        alignItems: "center",
    },
});

export function ScreenTitle(props) {
    return (
        <View style={styles.container}>
            <Text {...props} style={styles.text}/>
        </View>
    );
}
