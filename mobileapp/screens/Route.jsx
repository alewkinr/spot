import React from "react"
import { StyleSheet, Button } from "react-native";

const Route = ({ navigation }) => {
    return (

        <Button title="Go back" onPress={() => navigation.goBack()} />
    )
}

const styles = StyleSheet.create({})

export { Route }
