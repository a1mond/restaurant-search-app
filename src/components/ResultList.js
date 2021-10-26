import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import consts from "../../styles/constantas";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
    return <View style={styles.constainerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={results}
            keyExtractor={(x) => x.id}
            renderItem={({ item }) => {
                return <ResultsDetail result={item} />
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        marginLeft: consts.MARGIN_LEFT,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    constainerStyle: {
        marginBottom: 10
    }
});

export default ResultsList;