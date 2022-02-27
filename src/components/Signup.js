import React, {useState} from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import navigationStrings from '../constants/navigationStrings';
import CustomButton from './CustomButton';
import * as Animatable from 'react-native-animatable';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Signup = ({navigation}) => {
  const [borders, setBorders] = useState({
    fName: false,
    lName: false,
    phone:false,
    Email: false,
    Password: false,
    cPassword: false,
  });
  const [placeholder, setPlaceholder] = useState({
    fName: 'First Name',
    lName: 'Last Name',
    phone: 'Cell Phone',
    Email: 'Email',
    Password: 'Password',
    cPassword: 'Confirm Password',
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

  const handleBlur = (name, value) => {
    setBorders(pre => ({
      ...pre,
      [name]: false,
    }));
    setPlaceholder(pre => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    navigation.replace(navigationStrings.Tab);
  };
  return (
    <>
      <Animatable.View animation="bounceInLeft" style={styles.container}>
        <View style={styles.namesContainer}>
          <View style={styles.innerContainer}>
            {borders.fName && <Text style={styles.focusedText}>First Name</Text>}
            <TextInput
              placeholder={placeholder.fName}
              style={[
                styles.nameText,
                {
                  borderBottomColor: borders.fName
                    ? colors.main
                    : colors.lightGrey,
                },
              ]}
              onFocus={() => handleFocus('fName')}
              onBlur={() => handleBlur('fName', 'First Name')}
              selectionColor={colors.main}
            />
          </View>
          <View style={styles.innerContainer}>
            {borders.lName && <Text style={styles.focusedText}>Last Name</Text>}
            <TextInput
              placeholder={placeholder.lName}
              style={[
                styles.nameText,
                {
                  borderBottomColor: borders.lName
                    ? colors.main
                    : colors.lightGrey,
                },
              ]}
              onFocus={() => handleFocus('lName')}
              onBlur={() => handleBlur('lName', 'Last Name')}
              selectionColor={colors.main}
            />
          </View>
        </View>

        <View style={styles.innerContainer}>
          {borders.phone && <Text style={styles.focusedText}>Cell Phone</Text>}
          <TextInput
            placeholder={placeholder.phone}
            style={[
              styles.inputText,
              {
                borderBottomColor: borders.Email
                  ? colors.main
                  : colors.lightGrey,
              },
            ]}
            onFocus={() => handleFocus('phone')}
            onBlur={() => handleBlur('phone', 'Cell Phone')}
            selectionColor={colors.main}
          />
        </View>
        <View style={styles.innerContainer}>
          {borders.Email && <Text style={styles.focusedText}>Email</Text>}
          <TextInput
            placeholder={placeholder.Email}
            style={[
              styles.inputText,
              {
                borderBottomColor: borders.Email
                  ? colors.main
                  : colors.lightGrey,
              },
            ]}
            onFocus={() => handleFocus('Email')}
            onBlur={() => handleBlur('Email', 'Email')}
            selectionColor={colors.main}
          />
        </View>
        <View style={styles.innerContainer}>
          {borders.Password && <Text style={styles.focusedText}>Password</Text>}
          <TextInput
            placeholder={placeholder.Password}
            style={[
              styles.inputText,
              {
                borderBottomColor: borders.Password
                  ? colors.main
                  : colors.lightGrey,
              },
            ]}
            onFocus={() => handleFocus('Password')}
            onBlur={() => handleBlur('Password', 'Password')}
            selectionColor={colors.main}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.innerContainer}>
          {borders.cPassword && (
            <Text style={styles.focusedText}>Confirm Password</Text>
          )}
          <TextInput
            placeholder={placeholder.cPassword}
            style={[
              styles.inputText,
              {
                borderBottomColor: borders.cPassword
                  ? colors.main
                  : colors.lightGrey,
              },
            ]}
            onFocus={() => handleFocus('cPassword')}
            onBlur={() => handleBlur('cPassword', 'Confirm Password')}
            selectionColor={colors.main}
            secureTextEntry={true}
          />
        </View>
        <CustomButton text="Sign up" onPress={handleLogin} />
      </Animatable.View>
    </>
  );
};
const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '20@s',
    position:'relative',
    zIndex:10
  },
  namesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameText:{
    width: WIDTH * 0.42,
    fontFamily: fonts.GothamBold,
    fontSize: '16@s',
    marginTop: '-10@s',
    paddingBottom: '-10@s',
    borderBottomWidth: '1@s',
  },
  innerContainer: {
    height: '56@s',
    padding: 0,
    justifyContent: 'flex-end',
  },
  focusedText: {
    fontFamily: fonts.GothamBold,
    color: colors.main,
    fontSize: '14@s',
    marginTop: '10@s',
  },
  inputText: {
    width: WIDTH * 0.9,
    fontFamily: fonts.GothamBold,
    fontSize: '16@s',
    marginTop: '-10@s',
    paddingBottom: '-10@s',
    borderBottomWidth: '1@s',
  },
});
export default Signup;
