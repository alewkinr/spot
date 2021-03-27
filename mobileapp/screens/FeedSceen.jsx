import React from 'react';
import {View, StyleSheet, Button, ScrollView} from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

const FeedScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Card>
                    <Text>
                        The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                        located in the Arabian Sea of the Indian Ocean.
                        It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    </Text>
                </Card>
                <Card>
                    <Text>
                        The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                        located in the Arabian Sea of the Indian Ocean.
                        It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    </Text>
                </Card>
                <Card>
                    <Text>
                        The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                        located in the Arabian Sea of the Indian Ocean.
                        It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    </Text>
                </Card>
                <Card>
                    <Text>
                        The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                        located in the Arabian Sea of the Indian Ocean.
                        It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    </Text>
                </Card>
                <Card>
                    <Text>
                        The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                        located in the Arabian Sea of the Indian Ocean.
                        It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    </Text>
                </Card>
            </ScrollView>
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
