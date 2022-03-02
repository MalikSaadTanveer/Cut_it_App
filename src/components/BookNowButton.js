//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import fonts from '../constants/fonts'
import colors from '../constants/colors'
import Dimensions from '../constants/Dimensions'
import CustomIcons from '../components/CustomIcons'
// create a component
const BookNowButton = ({text,onPress,color,iconTag,iconName}) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={[styles.btn,{backgroundColor:color?color:colors.main}]}>
            {iconTag && <CustomIcons tag={iconTag} name={iconName} style={styles.icon}/>}
            <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = ScaledSheet.create({
    container: {
        width: Dimensions.WIDTH,
        position: 'absolute',
        bottom:0,
    },
    btn:{
        paddingVertical:'16@s',
        alignItems:'center',
        borderTopLeftRadius:'10@s',
        borderTopRightRadius:'10@s',
        flexDirection: 'row',
        justifyContent:'center',
        width: Dimensions.WIDTH,


    },
    icon:{
        marginRight:'10@s',
        fontSize:'24@s',
        color: colors.white,

    },
    text:{
        textTransform:'uppercase',
        fontFamily:fonts.GothamBold,
        fontSize:'16@s',
        color:colors.white,
    },
    
    
});

export default BookNowButton;
