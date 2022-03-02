//import liraries
import React, {useState,useEffect} from 'react';
import {View, Text, TextInput,Keyboard} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Header from '../components/Header';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import fonts from '../constants/fonts';

// create a component
const ChangePassword = ({navigation}) => {

    useEffect(() => {
        const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
          Keyboard.dismiss();
        });
        return () => {
          keyboardHide.remove();
        };
      }, []);
      const [borders, setBorders] = useState({
        CurrentPassword: false,
        NewPassword: false,
        ConfirmPassword: false,
      });
    
      const [placeholder, setPlaceholder] = useState({
        CurrentPassword: 'Current Password',
        NewPassword: 'New Password',
        ConfirmPassword: 'Confirm New Password',
      });
    
      const [data, setData] = useState({
        CurrentPassword: '',
        NewPassword: '',
        ConfirmPassword: '',
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
      const handleBlur = (name, value)=> {
        setBorders(pre => ({
          ...pre,
          [name]: false,
        }));
        setPlaceholder(pre => ({
          ...pre,
          [name]: value,
        }));
      };
    
      const handleData = (name, value) => {
        setData(pre => ({...pre, [name]: value}));
      };

  return (
    <View style={styles.container}>
      <Header
        leftText="Change Password"
        rightText="Save"
        backIcon
        onPress={() => navigation.goBack()}
      />

      <View style={styles.innerContainer}>
        
        <View style={[styles.textContainers,{marginBottom:20}]}>
          {(borders.CurrentPassword || data.CurrentPassword.length>0) && 
          <Text style={styles.focusedText}>Current Password</Text>
          }
          <TextInput
            placeholder={placeholder.CurrentPassword}
            style={[
              styles.inputText,
              {borderBottomColor: borders.CurrentPassword ? colors.main : 'transparent'},
            ]}
            onFocus={() => handleFocus('CurrentPassword')}
            onBlur={() => handleBlur('CurrentPassword','Current Password')}
            selectionColor={colors.main}
            value={data.CurrentPassword}
            onChangeText={text => handleData('CurrentPassword', text)}
            secureTextEntry={true}
          />
        </View>
       
        <View style={styles.textContainers}>
          {(borders.NewPassword || data.NewPassword.length>0) && <Text style={styles.focusedText}>New Password</Text>}
          <TextInput
            placeholder={placeholder.NewPassword}
            style={[
              styles.inputText,
              {borderBottomColor: borders.NewPassword ? colors.main : 'transparent'},
            ]}
            onFocus={() => handleFocus('NewPassword')}
            onBlur={() => handleBlur('NewPassword','New Password')}
            selectionColor={colors.main}
            value={data.NewPassword}
            onChangeText={text => handleData('NewPassword', text)}
            secureTextEntry={true}
          />
        </View>
        
        <View style={styles.textContainers}>
          {(borders.ConfirmPassword || data.ConfirmPassword.length>0)&& <Text style={styles.focusedText}>Confirm New Password</Text>}
          <TextInput
            placeholder={placeholder.ConfirmPassword}
            style={[
              styles.inputText,
              {borderBottomColor: borders.ConfirmPassword ? colors.main : 'transparent'},
            ]}
            onFocus={() => handleFocus('ConfirmPassword')}
            onBlur={() => handleBlur('ConfirmPassword','Confirm New Password')}
            selectionColor={colors.main}
            value={data.ConfirmPassword}
            onChangeText={text => handleData('ConfirmPassword', text)}
            secureTextEntry={true}
          />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  innerContainer: {
    width: Dimensions.WIDTH,
    padding: '12@s',
  },
  textContainers: {
    backgroundColor: colors.secondary,
    marginTop: '2@s',
    padding: '4@s',
    height:'52@s',
    justifyContent:'flex-end',
  },
  focusedText: {
    fontFamily: fonts.GothamBold,
    color: colors.main,
    fontSize: '14@s',
  },
  inputText: {
    width: Dimensions.WIDTH * 0.9,
    fontFamily: fonts.GothamBold,
    fontSize: '16@s',
    marginTop: '-10@s',
    paddingBottom: '-10@s',
    borderBottomWidth: '1@s',
  },
});

//make this component available to the app
export default ChangePassword;
