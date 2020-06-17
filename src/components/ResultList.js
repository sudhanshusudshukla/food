import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetails from './ResultsDetails';

const ResultList = ({ title, results }) => {
    //console.log(results.id);
    //console.log(results);
   // console.log(results[0].restaurant.name);
   //console.log(results[0].restaurant.id);

    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text>Results: {results.length}</Text> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                return <ResultsDetails 
                result={item}
                />
                }}
            >
            </FlatList>

        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical:10
    }

});

export default ResultList;