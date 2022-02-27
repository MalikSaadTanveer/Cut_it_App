//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import fonts from '../constants/fonts';

const Rewards = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header leftText="Rewards" rightText="Redeem Code" />
      <View style={styles.referalContainer}>
        <Text style={styles.referalCode}>Mcszz2b</Text>
        <Text style={styles.referalDesc}>Referal Code</Text>
      </View>
      <View style={styles.innerContainer}>
          <Text style={styles.innerTitle}>Refer a Barber</Text>
          <View style={styles.innerDesc}>
          <Text style={styles.desc1}>Get $100 when your barber upgrades to PRO</Text>
          <Text style={styles.desc2}>Barbers get 50% off for the next 3 months</Text>
          </View>
      </View>
      <CustomButton text="share code"/>
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
  referalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:'20@s',
    width: Dimensions.WIDTH * 0.9,
  },
  referalCode: {
    fontSize: '20@s',
    marginTop: '20@s',
    marginBottom: '10@s',
    padding: '10@s',
    borderRadius: '10@s',
    textTransform: 'uppercase',
    fontFamily: fonts.GothamBold,
    color: colors.white,
    borderStyle:'dashed',
    borderWidth: 2,
    borderColor:colors.main,
  },
  referalDesc: {
    fontFamily: fonts.GothamMedium_1,
    fontSize: '14@s',
    color: colors.lightGrey
  },
  innerContainer:{
    justifyContent: 'center',
    width: Dimensions.WIDTH * 0.9,
    marginVertical:'20@s',
  },
  innerTitle:{
      textTransform:'uppercase',
      fontSize: '12@s',
      color:colors.white,
      marginBottom:'10@s',
      fontFamily: fonts.GothamBold,
  },
  innerDesc:{
    paddingVertical:'16@s',
    paddingHorizontal:'10@s',
    backgroundColor:colors.secondary,
    borderRadius:'10@s',
    justifyContent: 'center',
  },
  desc1:{
    fontFamily:fonts.GothamBold,
    fontSize:'11@s',
    color:colors.main
  },
  desc2:{
    fontFamily:fonts.GothamLight,
    marginTop:'10@s',
    fontSize:'10@s',
  }
});

export default Rewards;
