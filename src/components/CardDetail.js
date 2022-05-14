//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, Keyboard, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import fonts from '../constants/fonts';

// create a component
const CardDetail = () => {
  useEffect(() => {
    const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
      Keyboard.dismiss();
    });
    return () => {
      keyboardHide.remove();
    };
  }, []);
  const [borders, setBorders] = useState({
    name: false,
    number: false,
    expiry: false,
    cvv: false,
  });

  const [placeholder, setPlaceholder] = useState({
    name: "Card Holder's Name",
    number: 'Card Number',
    expiry: '09 / 25',
    cvv: 'CVV',
  });

  const [data, setData] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: '',
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

  const handleData = (name, value) => {
    setData(pre => ({...pre, [name]: value}));
  };
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Add card details</Text>

        <View style={styles.textContainers}>
          {(borders.name || data.name.length > 0) && (
            <Text style={styles.focusedText}>Card Holder's Name</Text>
          )}
          <TextInput
            placeholder={placeholder.name}
            placeholderTextColor={colors.lightGrey}
            style={[styles.inputText, borders.name && styles.activeInputText]}
            onFocus={() => handleFocus('name')}
            onBlur={() => handleBlur('name', "Card Holder's Name")}
            selectionColor={colors.main}
            value={data.name}
            onChangeText={text => handleData('name', text)}
          />
        </View>

        <View style={styles.textContainers}>
          {(borders.number || data.number.length > 0) && (
            <Text style={styles.focusedText}>Card Number</Text>
          )}
          <TextInput
            placeholder={placeholder.number}
            placeholderTextColor={colors.lightGrey}
            style={[styles.inputText, borders.number && styles.activeInputText]}
            onFocus={() => handleFocus('number')}
            onBlur={() => handleBlur('number', 'Card Number')}
            selectionColor={colors.main}
            value={data.number}
            onChangeText={text => handleData('number', text)}
          />
        </View>

        <View style={styles.cvvExpiryContainer}>
          <View style={[styles.textContainers,styles.expiry]}>
            {(borders.expiry || data.expiry.length > 0) && (
              <Text style={styles.focusedText}>Expiry Date</Text>
            )}
            <TextInput
              placeholder={placeholder.expiry}
              placeholderTextColor={colors.lightGrey}
              style={[
                styles.inputText,styles.expiry,
                borders.expiry && styles.activeInputText,
              ]}
              onFocus={() => handleFocus('expiry')}
              onBlur={() => handleBlur('expiry', '09 / 25')}
              selectionColor={colors.main}
              value={data.expiry}
              onChangeText={text => handleData('expiry', text)}
            />
          </View>

          <View style={[styles.textContainers,styles.cvv]}>
            {(borders.cvv || data.cvv.length > 0) && (
              <Text style={styles.focusedText}>Cvv</Text>
            )}
            <TextInput
              placeholder={placeholder.cvv}
              placeholderTextColor={colors.lightGrey}
              style={[
                styles.inputText,styles.cvv,
               borders.cvv && styles.activeInputText]}
              onFocus={() => handleFocus('cvv')}
              onBlur={() => handleBlur('cvv', 'Cvv')}
              selectionColor={colors.main}
              value={data.cvv}
              onChangeText={text => handleData('cvv', text)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  inner: {
    width: Dimensions.WIDTH,
    padding: '12@s',
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: fonts.GothamBold,
    color: colors.white,
    fontSize: '14@s',
    paddingTop: '24@s',
    paddingBottom: '6@s',
  },
  textContainers: {
    marginTop: '2@s',
    marginBottom: '12@s',
    height: '34@s',
    justifyContent: 'flex-end',
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
    borderBottomColor: colors.grey,
    borderBottomWidth: '1@s',
    color: colors.white
  },
  activeInputText: {
    borderBottomColor: colors.main,
  },
  cvvExpiryContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  expiry:{
    width: Dimensions.WIDTH * 0.4,
    // backgroundColor: colors.grey
  },
  cvv:{
    width: Dimensions.WIDTH * 0.4,
    marginRight:'4%',
    // backgroundColor: colors.grey
  }
});

//make this component available to the app
export default CardDetail;
