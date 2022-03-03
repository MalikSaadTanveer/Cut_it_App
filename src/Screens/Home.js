//import liraries
import React, {Component} from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import DashboardIamgeComponent from '../components/DashboardIamgeComponent';
import DashboardSlides from '../components/DashboardSlides';

import Header from '../components/Header';
import colors from '../constants/colors';
import navigationStrings from '../constants/navigationStrings';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftText="Home"
        icon
        iconPress={() => navigation.navigate(navigationStrings.Notifications)}
      />

      <DashboardIamgeComponent
        mainImage={require('../../assets/images/light-logo.png')}
        modalImage={require('../../assets/images/dashboard1.jpg')}
        home
      />

      <DashboardSlides title="My Barbers" desc="Find Barbers" icon={0} />
      <DashboardSlides title="My Cuts" desc="Add Photo" icon={1} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});

export default Home;
