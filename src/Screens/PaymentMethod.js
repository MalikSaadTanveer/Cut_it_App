//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import colors from '../constants/colors';

// create a component
const Paymentmethod = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftText="Payment Method"
        backIcon
        onPress={() => navigation.goBack()}
      />
      <CustomButton text="Add Payment Method" iconTag="Ionicons" iconName="ios-add-circle-outline"/>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});

//make this component available to the app
export default Paymentmethod;
