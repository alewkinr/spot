import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "@ui-kitten/components";
import { Text } from "./Themed"


const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
        <Text category='h6'>
            {info.item.title} {info.index + 1}
        </Text>
    </View>
);

const renderItemFooter = (footerProps) => (
    <Text {...footerProps}>
        By Wikipedia
    </Text>
);


const RouteCard = (props) => {
    const onPress = () => props.item.navigation.navigate("RouteScreen", {
        id: props.item.index,
    })

    return (
            <Card
                style={styles.item}
                status='basic'
                header={headerProps => renderItemHeader(headerProps, props)}
                footer={renderItemFooter}
                onPress={ onPress }
            >
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                    a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                </Text>
            </Card>

)}


const styles = StyleSheet.create({
    item: {
        marginVertical: 4
    },
})

export { RouteCard }
