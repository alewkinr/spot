import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const FeedScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Feed</Text>
        </View>
    )
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            marginHorizontal: 'auto',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
)


export {FeedScreen};
