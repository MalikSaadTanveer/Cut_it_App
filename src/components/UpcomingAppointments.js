//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import fonts from '../constants/fonts';
import LinearGradient from 'react-native-linear-gradient';
// create a component
const UpcomingAppointments = ({onPress}) => {
  return (
      <Pressable onPress={onPress}>
    <LinearGradient start={{x:0,y:0}} end={{x:0.5,y:1}}
    colors={[colors.main,colors.secondary2]} style={styles.container}>
      <View style={styles.main}>
      <View style={styles.overlay}>
          <Text style={styles.overlayText}>Upcoming</Text>
      </View>
        <Image
          source={require('../../assets/images/dashboard1.jpg')}
          style={styles.img}
        />
        <View style={styles.description}>
          <Text style={styles.name}>Tony Fade</Text>
          <Text style={styles.service}>Kid's Haircut</Text>
          <Text style={styles.time}>12, March 2022 - 05:00</Text>
        </View>
      </View>

      <View style={styles.horizontalLine}></View>
      <View style={styles.bottom}>
          <Text style={styles.bottomText}>Total: $45</Text>
      </View>
    </LinearGradient>
    </Pressable>
  );
};

// define your styles
const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: Dimensions.WIDTH * 0.9,
    marginTop:'20@s',
    marginBottom: '10@s',
    borderRadius: '10@s',
    position:'relative',
    borderWidth:1,
    borderColor: colors.main
  },
  overlay:{
    position:'absolute',
    top:'-16@s',
    flexDirection:'row',
    justifyContent:'center',
    zIndex:1,
    // backgroundColor:'red',
    width:'100%',
    // paddingHorizontal:'12@s'
  },
  overlayText:{
      fontFamily:fonts.GothamBold,
      backgroundColor:colors.main,
      paddingVertical: '4@s',
      paddingHorizontal:'8@s',
      borderRadius: '4@s',
      fontSize: '16@s',
      marginLeft:'12@s',
      color:colors.white,

  },
  main: {
    padding: '10@s',
    paddingTop: '30@s',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  img: {
    width: '60@s',
    height: '60@s',
    borderRadius: '30@s',
    marginRight: '10@s',
  },
  description: {
    // backgroundColor: 'red',
    width: '76%',
  },
  name: {
    fontFamily: fonts.GothamBold,
    fontSize: '16@s',
    color: colors.white,
  },
  service: {
    fontFamily: fonts.GothamBook,
    fontSize: '14@s',
    color: colors.lightGrey,
  },
  time: {
    fontFamily: fonts.GothamBook,
    fontSize: '14@s',
    color: colors.lightGrey,
  },
  horizontalLine:{
      height:'2@s',
      backgroundColor: colors.main,
      marginHorizontal:'10@s'
  },
  bottom:{
      padding:'10@s',
      paddingVertical:'6@s',
      alignItems:'flex-end'
  },
  bottomText:{
      color:colors.main,
      fontFamily:fonts.GothamBold,
      fontSize:'16@s',
  }
});

export default UpcomingAppointments;
