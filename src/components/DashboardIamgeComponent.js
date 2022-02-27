//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import fonts from '../constants/fonts';

// create a component
const DashboardIamgeComponent = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={colors.gradient2}
        style={styles.overlay}></LinearGradient>
      <Image
        source={require('../../assets/images/light-logo.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
      <View style={styles.innerView}>
          <Image
            source={require('../../assets/images/dashboard1.jpg')}
            style={styles.modalImage}
          />
        <Text style={styles.modalText}>Malik Saad</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = ScaledSheet.create({
  container: {
    width: Dimensions.WIDTH,
    height: Dimensions.HEIGHT * 0.3,
    position: 'relative',
    marginVertical: '20@s',
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: Dimensions.WIDTH,
    height: Dimensions.HEIGHT * 0.3,
    position: 'absolute',
    zIndex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)',
  },
  backgroundImage: {
    width: Dimensions.WIDTH,
    height: Dimensions.HEIGHT * 0.3,
  },
  innerView: {
    position: 'absolute',
    zIndex: 2,
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  modalImage: {
    width: '120@s',
    height: '120@s',
    borderRadius: '60@s',
    backgroundColor: colors.black,
    marginTop:'40@s'
  },
  modalText: {
    fontSize: '20@s',
    marginTop: '30@s',
    fontFamily: fonts.GothamBold,
    color: colors.white,
  },
});

//make this component available to the app
export default DashboardIamgeComponent;
