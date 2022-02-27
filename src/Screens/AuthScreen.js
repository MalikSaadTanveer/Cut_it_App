//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import Signup from '../components/Signup';
import Login from '../components/Login';
import {ScaledSheet} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

// create a component
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const AuthScreen = ({navigation}) => {
  const [isBtnActive, setIsBtnActive] = useState(1)
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.logoText}>Cut It</Text> */}
      <View style={styles.logoContainer}>
      <Image source={require('../../assets/images/light-logo.png')} 
      resizeMode="contain"
      style={styles.logo} />
      </View>
      <View style={styles.btnContainer}>
        <Pressable style={isBtnActive? styles.btnActive: styles.btnInActive} onPress={()=>setIsBtnActive(1)}>
          <Text style={styles.btnText}>Log in</Text>
        </Pressable>
        <Pressable style={isBtnActive? styles.btnInActive:styles.btnActive} onPress={()=>setIsBtnActive(0)}>
          <Text style={styles.btnText}>Sin up</Text>
        </Pressable>
      </View>

      {
        isBtnActive ?
        <Login navigation={navigation} /> : <Signup navigation={navigation}/>
      }

      <View style={styles.imgContainer}>
        {/* <View style={styles.imgInnerContainer}> */}
        <LinearGradient colors={colors.gradient1}  style={styles.imgOverlay}></LinearGradient>
          <Image
            source={require('../../assets/images/bg1.jpg')}
            style={styles.bottomImg}
            resizeMode="cover"
          />
        </View>
      {/* </View> */}
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

  logoText: {
    marginTop: '20@s',
    fontSize: '40@s',
    color: colors.white,
    fontFamily: fonts.GothamBoldItalic,
  },
  logoContainer:{
    height: HEIGHT * 0.16,
    // backgroundColor: 'red'
  },
  logo:{
    marginTop: '20@s',
    width: WIDTH * 0.4,
    height: HEIGHT * 0.14,
    // backgroundColor:'blue'
  },
  btnContainer: {
    flexDirection:'row',
    width:WIDTH * 0.9,
    justifyContent:'center',
    marginTop:'20@s',
  },
  btnActive:{
    height: '40@s',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.main,
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
    textTransform:'uppercase',
    fontFamily:fonts.GothamBold,
    color:colors.white
  },
  imgContainer: {
    marginTop:'auto'
  },
  // imgInnerContainer: {
  //   position: 'relative',
  // },
  imgOverlay: {
    height: HEIGHT * 0.4,
    width: WIDTH,
    position: 'absolute',
    // backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1,
  },
  bottomImg: {
    height: HEIGHT * 0.4,
    width: WIDTH,
  },
});

export default AuthScreen;
