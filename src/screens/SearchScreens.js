import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';



const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    //console.log(results);
    const filterResultsByPrice = average_cost_for_two => {
        // console.log(results[0].restaurant.average_cost_for_two);
        return results.filter(result => {
            return result.restaurant.average_cost_for_two === average_cost_for_two;
        });
    };

    return (
        <View style={styles.backgroundMain}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text>We have found {results.length} restaurants</Text> */}
            <ScrollView style={styles.restaurantTitle}>
            <ResultList  results={filterResultsByPrice(400)} title="CostEffective" />
            <ResultList  results={filterResultsByPrice(1600)} title="Big Pricier" />
            <ResultList   results={filterResultsByPrice(2500)} title="Big Spender " />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundMain: {
        backgroundColor: '#ffffff',
        flex: 1
    },
    restaurantTitle: {
        marginLeft:10
    }
});

export default SearchScreen;