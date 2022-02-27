//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import fonts from '../constants/fonts'
import colors from '../constants/colors'
import Dimensions from '../constants/Dimensions'
// create a component
const CustomButton = ({text,onPress,color}) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={[styles.btn,{backgroundColor:color?color:colors.main}]}>
            <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = ScaledSheet.create({
    container: {
        width: Dimensions.WIDTH*0.9,
    },
    btn:{
        paddingVertical:'10@s',
        alignItems:'center',
        marginTop:'10@s',

    },
    text:{
        textTransform:'uppercase',
        fontFamily:fonts.GothamBold,
        fontSize:'16@s',
        color:colors.white,
    }
});

export default CustomButton;
