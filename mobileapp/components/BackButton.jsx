import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import { ArrowBack } from "../constants/Symbols";

const BackButton = () => {
    const navigation = useNavigation();
    return (<Button title={`${ArrowBack} Назад`}
        onPress={() => navigation.goBack()}
    />);
};

export { BackButton };
