import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import zomato from '../api/zomato';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try {
            console.log('Search API called');
            const response = await zomato.get('/search', {
                params: {
                    q: searchTerm
                }
            });
            //console.log(response.data.restaurants[0].restaurant.average_cost_for_two);
            setResults(response.data.restaurants);
        } catch (err) {
            setErrorMessage('Something went wrong or Network error');
        }
    };
    //call searchApi when component is first rendered
    useEffect(() => {
        searchApi('Bangalore');
    }, []);
    return [searchApi, results, errorMessage];
};