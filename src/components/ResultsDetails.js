import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetails = ({ result }) => {
    return (
        <View style={styles.container}> 
            <Image
            style={styles.image}
                source={{ uri: result.restaurant.featured_image }}
            />
            <Text style={styles.name}>{result.restaurant.name}</Text>
            <Text>Reviews: {result.restaurant.all_reviews_count} , Rating:
            {result.restaurant.user_rating.aggregate_rating}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    image: {
            borderRadius:4,
            width:250,
            height:120
           


    },
    name: {
        fontWeight: 'bold',
        fontSize:14
    }
});

export default ResultsDetails;