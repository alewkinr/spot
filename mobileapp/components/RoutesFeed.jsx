import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from '@ui-kitten/components';
import { RouteCard } from "./RouteCard"


// todo: fill with data from backend
const data = new Array(8).fill({
    title: 'Item',
});

const RoutesFeed = () => {
    return (
        <List
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            data={data}
            renderItem={RouteCard}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        maxHeight: 320,
    },
    contentContainer: {
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
});

export { RoutesFeed }
