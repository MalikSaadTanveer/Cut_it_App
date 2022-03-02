//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import fonts from '../constants/fonts';

// create a component
const DashboardIamgeComponent = ({mainImage,modalImage,home}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={colors.gradient2}
        style={styles.overlay}></LinearGradient>
      <Image
        source={mainImage}
        style={styles.backgroundImage}
        resizeMode={home ? "contain":'cover'}
      />
      <View style={styles.innerView}>
          <Image
            source={modalImage}
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
    marginBottom: '20@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: Dimensions.WIDTH,
    height: Dimensions.HEIGHT * 0.3,
    position: 'absolute',
    zIndex: 1,
    
  },
  backgroundImage: {
    width: Dimensions.WIDTH,
    height: Dimensions.HEIGHT * 0.3,
  },
  innerView: {
    position: 'absolute',
    zIndex: 2,
    alignItems: 'center',
  },
  modalImage: {
    width: '120@s',
    height: '120@s',
    borderRadius: '60@s',
    backgroundColor: colors.black,
    // marginTop:'40@s'
  },
  modalText: {
    fontSize: '20@s',
    marginTop: '10@s',
    fontFamily: fonts.GothamBold,
    color: colors.white,
  },
});

//make this component available to the app
export default DashboardIamgeComponent;
