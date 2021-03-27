import * as React from "react";
import { Text as DefaultText } from "react-native";

import Colors from "../constants/Colors";

const useThemeColor = (theme, colorName) => {
    return Colors[theme][colorName];
}

export function Text(props) {
    const textColorName = "text"

    const { style, theme, ...otherProps } = props;
    const color = useThemeColor(theme, textColorName);

    return <DefaultText style={[{ color }, style]} {...otherProps} />;
}
