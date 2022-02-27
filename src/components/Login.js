import React, {useState} from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import navigationStrings from '../constants/navigationStrings';
import CustomButton from './CustomButton';
import * as Animatable from 'react-native-animatable';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Login = ({navigation}) => {
  const [borders, setBorders] = useState({
    Email: false,
    Password: false,
  });

  const [placeholder, setPlaceholder] = useState({
    Email: 'Email',
    Password: 'Password',
  });

  const [data, setData] = useState({
    Email: '',
    Password: '',
  });


  const handleFocus = name => {
    setBorders(pre => ({
      ...pre,
      [name]: true,
    }));
    setPlaceholder(pre => ({
      ...pre,
      [name]: '',
    }));
  };
  const handleBlur = name => {
    setBorders(pre => ({
      ...pre,
      [name]: false,
    }));
    setPlaceholder(pre => ({
      ...pre,
      [name]: name,
    }));
  };

  const handleData = (name,value) => {
    setData(pre=>({...pre,[name]: value}));
  }
  const handleLogin = ()=>{
      navigation.replace(navigationStrings.Tab)
  }
  return (
    <>
      <Animatable.View  animation="bounceInRight" style={styles.container}>
        <View style={styles.innerContainer}>
          {borders.Email && <Text style={styles.focusedText}>Email</Text>}
          <TextInput
            placeholder={placeholder.Email}
            style={[styles.inputText,{borderBottomColor:borders.Email?colors.main:colors.lightGrey}]}
            onFocus={() => handleFocus('Email')}
            onBlur={() => handleBlur('Email')}
            selectionColor={colors.main}
            value={data.Email}
            onChangeText={text=>handleData('Email',text)}
          />
        </View>
        <View style={styles.innerContainer}>
          {borders.Password && <Text style={styles.focusedText}>Password</Text>}
          <TextInput
            placeholder={placeholder.Password}
            style={[styles.inputText,{borderBottomColor:borders.Password?colors.main:colors.lightGrey}]}
            onFocus={() => handleFocus('Password')}
            onBlur={() => handleBlur('Password')}
            selectionColor={colors.main}
            secureTextEntry={true}
            value={data.Password}
            onChangeText={text=>handleData('Password',text)}
          />
        </View>
        <CustomButton text="Log in" onPress={handleLogin}/>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </Animatable.View>
    </>
  );
};
const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '20@s',
    position:'relative',
    zIndex:10,
  },
  innerContainer:{
    height:'56@s',
    padding:0,
    justifyContent:'flex-end',
  },
  focusedText:{
    fontFamily:fonts.GothamBold,
    color:colors.main,
    fontSize:'14@s',
    marginTop:'10@s',
  },
  inputText: {
    width: WIDTH * 0.9,
    fontFamily: fonts.GothamBold,
    fontSize:'16@s',
    marginTop:'-10@s',
    paddingBottom:'-10@s',
    borderBottomWidth:'1@s',
  },
  forgot:{
    alignSelf:'center',
    color:colors.main,
    fontFamily:fonts.GothamBold,
    textTransform:'uppercase',
    marginTop:'10@s'
  }
});
export default Login;
