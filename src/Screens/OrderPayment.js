import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import navigationStrings from '../constants/navigationStrings';

const OrderPayment = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        backIcon
        onPress={() => navigation.goBack()}
        leftText="Payment"
        rightText="Order"
      />
      <ScrollView showsVerticalScrollIndicator={false} >
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});

//make this component available to the app
export default OrderPayment;
