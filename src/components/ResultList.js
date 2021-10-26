import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from "react-navigation";

import consts from "../../styles/constantas";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null;
    }
    return <View style={styles.constainerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={results}
            keyExtractor={(x) => x.id}
            renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}><ResultsDetail result={item} /></TouchableOpacity>
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

export default withNavigation(ResultsList);