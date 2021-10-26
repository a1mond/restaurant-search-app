import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(x => x.price === price);
    };

    return <>
        <SearchBar
            term={term}
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => { searchApi(term) }}
        />
        {errorMessage ? <Text style={styles.messageStyle}></Text> : null}
        <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
            <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
            <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
        </ScrollView>
    </>;
};

const styles = StyleSheet.create({
    messageStyle: {
        marginVertical: 3,
        textAlign: 'center',
        fontSize: 15
    }
});

export default SearchScreen;