import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import zomato from '../api/zomato';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');
    //console.log(id);

    const getResult = async (id) => {
        const response = await zomato.get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`);
        setResult(response.data);
        //console.log(response);
        //console.log(result.name);
        //console.log(result.cuisines);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    // console.log(result.name);
    // console.log(result.location.locality_verbose);
    console.log(result.photos_url);

    return (
        <View>
            <Text>{result.name}</Text>
            <Text>{result.location.locality_verbose}</Text>
            <Image
                style={styles.imageParticular}
                source={{ uri: result.photos_url }}
            />
            {/* <FlatList 
            data={result.photos_url}
            keyExtractor={photo => photo}
            renderItem={({ item,index }) => {
                return  <Image
                // key={(new Date()).getTime()}
                style={styles.imageParticular}
                source={{ uri: item + index }}
            />
            }}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    imageParticular: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;