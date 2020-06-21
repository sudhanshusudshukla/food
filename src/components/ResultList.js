import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetails from './ResultsDetails';
import { withNavigation } from 'react-navigation';


const ResultList = ({ title, results, navigation }) => {
    //console.log(results.id);
    //console.log(results);
    // console.log(results[0].restaurant.name);
   // console.log(results[0].restaurant.id); --> to get the id
  //console.log(results[0].restaurant.R.res_id); --> to get restaurant id
//console.log(results[0].restaurant.deeplink);

    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text>Results: {results.length}</Text> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(results) => results.restaurant.R.res_id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => 
                            navigation.navigate('ResultShowScreen', {id: item.restaurant.R.res_id})}>
                            <ResultsDetails result={item} />
                        </TouchableOpacity>
                    );
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
        marginVertical: 10
    }

});


export default withNavigation(ResultList);