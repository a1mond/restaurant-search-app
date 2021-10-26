import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const resp = await yelp.get(`/${id}`);
        setResult(resp.data);
    };

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) return null;

    return <View>
        <Text>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }} />
            }}
        />
    </View>;
}
const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        marginVertical: 15,
        width: Dimensions.get('window').width - 20,
        height: 200
    }
});

export default ResultsShowScreen;