import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import fonts from '../constants/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const DashboardSlides = ({title,desc,icon}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.inner}>
                {icon ? 
                <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="image-filter-center-focus-strong-outline" style={styles.icons}/>
                <Text style={styles.iconText}>{desc}</Text>
                </View>
                :
                <View style={styles.iconContainer}>
                <AntDesign name="search1" style={styles.icons}/>
                <Text style={styles.iconText}>{desc}</Text>
                </View>
                }
            </View>
        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        width: Dimensions.WIDTH * 0.9,
        // backgroundColor:'red',
        marginTop:'20@s',
    },
    titleText:{
        textTransform:'uppercase',
        fontSize:'14@s',
        fontFamily:fonts.GothamBold,
        color:colors.white,
        marginBottom:'10@s',
    },
    inner:{
        height: Dimensions.HEIGHT * 0.1,
        backgroundColor:colors.secondary,
        borderRadius:'4@s'
    },
    iconContainer:{
        height: Dimensions.HEIGHT * 0.1,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:'20@s',
    },
    icons:{
        fontSize:'20@s',
        backgroundColor:colors.black,
        padding:'10@s',
        borderRadius:'50@s',
        color: colors.main,
        marginRight:'20@s',
    },
    iconText:{
        fontSize:'16@s',
        fontFamily: fonts.GothamBold,
        textTransform:'uppercase',
        color: colors.main
    }
});

export default DashboardSlides;
