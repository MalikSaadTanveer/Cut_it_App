//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import SearchBar from '../components/SearchBar';
import SearchCard from '../components/SearchCard';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions'
import fonts from '../constants/fonts';


const Search = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <SearchBar/>
            <Text style={styles.searchHeader}>Search Results</Text>
            <SearchCard navigation={navigation} />
        </SafeAreaView>
    );
};

// define your styles
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    searchHeader:{
        width:Dimensions.WIDTH,
        padding:'12@s',
        fontSize:'16@s',
        fontFamily: fonts.GothamBold,
        color:colors.white
    }
});

//make this component available to the app
export default Search;
