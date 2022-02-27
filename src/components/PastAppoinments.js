//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import fonts from '../constants/fonts';

// create a component
const PastAppoinments = () => {
    return (
        <Animatable.View animation="bounceInLeft" style={styles.container}>
            <Text style={styles.title}>You have no past appointments</Text>
            <Text style={styles.desc}>Your past appointments will show up</Text>
            <Text style={styles.desc}>here.</Text>
        </Animatable.View>
    );
};

// define your styles
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        width:Dimensions.WIDTH * 0.9,   
      },
      title:{
          fontSize:'14@s',
          marginBottom:'10@s',
          fontFamily: fonts.GothamBold,
          color:colors.main
      },
      desc:{
          fontSize:'12@s',
          alignItems:'center',
          fontFamily: fonts.GothamBook,
          color:colors.lightGrey
      }
});

//make this component available to the app
export default PastAppoinments;
