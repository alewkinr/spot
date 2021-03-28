import React from 'react';
import {View, StyleSheet, Button, ScrollView, SafeAreaView, Image} from 'react-native';
import {Card, Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

const FeedScreen = () => {


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false} style={{padding: 0, margin: 0}}>
                <Card style={{height: 200}}>
                    <Image style={{height: 100, width: 100}} source={require('../assets/img/1.png')}
                           transition={false}/>
                </Card>
                <Card style={{height: 200}}>
                    <Text>
                        sdasdasa
                    </Text>
                </Card>
                <Card style={{height: 200}}>
                    <Text>
                        t
                    </Text>
                </Card>
                <Card style={{height: 200}}>
                    <Text>
                        t
                    </Text>
                </Card>
                <Card style={{height: 200}}>
                    <Text>
                        t
                    </Text>
                </Card>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            marginHorizontal: 0,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0
        },
    }
)


export {FeedScreen};
