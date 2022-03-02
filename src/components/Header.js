//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
// create a component
const Header = ({leftText, rightText, icon, backIcon,onPress,rightPress,iconPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>          
        {backIcon && <MaterialIcons name="keyboard-backspace" style={styles.backIcon} onPress={onPress} />}
        {leftText && <Text style={styles.headerText}>{leftText}</Text>}
      </View>
      <View style={styles.inner}>          
        {rightText && <Text style={styles.rightText} onPress={rightPress} >{rightText}</Text> }
        {icon && <Ionicons name="notifications-outline" style={styles.iconStyle} onPress={iconPress} /> }
      </View>
    </View>
  );
};

// define your styles
const styles = ScaledSheet.create({
  container: {
    width: WIDTH,
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    padding: '12@s',
    flexDirection:'row'
  },
  inner:{
    flexDirection:'row',
    alignItems: 'center',  
  },
  headerText: {
    color: colors.white,
    fontSize: '16@s',
    fontFamily: fonts.GothamMedium_1,
    textTransform:'uppercase'
  }, 
  rightText: {
    color: colors.main,
    fontSize: '14@s',
    fontFamily: fonts.GothamBold,
    textTransform:'uppercase'

  }, 
  iconStyle: {
    color: colors.main,
    fontSize: '24@s',
    marginLeft:'10@s'
  },
  backIcon:{
    color: colors.white,
    fontSize: '24@s',
    marginRight:'10@s'
  }
});

//make this component available to the app
export default Header;
