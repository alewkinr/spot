import React from "react";
import {View, Text, StyleSheet} from "react-native";

const DotDivider = (props) => {
    return (<View style={{
        width: 10,
        height: 10,
        backgroundColor: '#D0D6E1',
        borderRadius: 50,
        marginHorizontal: 10
    }} {...props}/>)
}

export default DotDivider
