//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet,Pressable,SafeAreaView} from 'react-native';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import Header from '../components/Header';
import Dimensions from '../constants/Dimensions';
import { ScaledSheet } from 'react-native-size-matters';
import UpcomingAppointments from '../components/UpcomingAppointments';
import PastAppoinments from '../components/PastAppoinments';

// create a component
const Booking = () => {
  const [isBtnActive, setIsBtnActive] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <Header leftText="Appoinments" />

      <View style={styles.btnContainer}>
        <Pressable
          style={isBtnActive ? styles.btnActive : styles.btnInActive}
          onPress={() => setIsBtnActive(1)}>
          <Text style={isBtnActive ? styles.btnText:styles.inActiveBtnText}>Upcoming</Text>
        </Pressable>
        <Pressable
          style={isBtnActive ? styles.btnInActive : styles.btnActive}
          onPress={() => setIsBtnActive(0)}>
          <Text style={isBtnActive ?styles.inActiveBtnText:styles.btnText}>Past</Text>
        </Pressable>
      </View>

      {
        isBtnActive ?
        <UpcomingAppointments  /> : <PastAppoinments />
      }
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
  btnContainer: {
    flexDirection:'row',
    width:Dimensions.WIDTH * 0.95,
    justifyContent:'center',
    marginTop:'20@s',
  },
  btnActive:{
    height: '40@s',
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:colors.main,
    borderBottomColor:colors.main,
    borderBottomWidth:'2@s',
    flex:1
  },
  btnInActive:{
    height: '40@s',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'transparent',
    flex:1
   
  },
  btnText:{
    fontSize:'14@s',
    textTransform:'uppercase',
    fontFamily:fonts.GothamBold,
    color:colors.main
  },
  inActiveBtnText:{
    fontSize:'14@s',
    textTransform:'uppercase',
    fontFamily:fonts.GothamBold,
    color:'grey'
  },
});

export default Booking;
