import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = average_cost_for_two => {
       // console.log(results[0].restaurant.average_cost_for_two);
        return results.filter(result => {
           // console.log(restaurant);
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
            <Text>We have found {results.length} restaurants</Text>
            <ResultList results={filterResultsByPrice(450) } title="CostEffective" />
            <ResultList results={filterResultsByPrice(600) } title="Big Pricier" />
            <ResultList results={filterResultsByPrice(1600) } title="Big Spender " />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundMain: {
        backgroundColor: '#ffffff'
    }
});

export default SearchScreen;