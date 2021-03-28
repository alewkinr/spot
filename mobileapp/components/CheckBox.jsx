import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import {View} from "react-native";

const CheckBox = (props) => {
    return (
        <View style={{
            position: 'absolute',
            borderRadius: 50,
            right: 35,
            top: 10,
            borderColor: props.checked  ? '#BED600' : 'rgba(255, 255, 255, 0.5)',
            backgroundColor: props.checked  ? '#BED600' : 'transparent',
            borderWidth: 2,
            width: 25,
            height: 25
        }}>
            {props.checked &&
            <Ionicons
                name={'checkmark-outline'} size={20}/>
            }

        </View>
    )
}

export default CheckBox
