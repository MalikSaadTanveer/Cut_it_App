//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  Image,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import CustomIcons from '../components/CustomIcons';
import Header from '../components/Header';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import fonts from '../constants/fonts';
import navigationStrings from '../constants/navigationStrings';

const ConfirmScreen = ({navigation}) => {
  useEffect(() => {
    const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
      Keyboard.dismiss();
    });
    return () => {
      keyboardHide.remove();
    };
  }, []);
  const [borders, setBorders] = useState({
    code: false,
  });

  const [placeholder, setPlaceholder] = useState({
    code: 'Enter Code',
  });

  const [data, setData] = useState({
    code: '',
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
    <SafeAreaView style={styles.container}>
      <Header
        backIcon
        leftText="Confirm & Review"
        rightText="Confirm"
        onPress={() => navigation.goBack()}
        rightPress={() => navigation.navigate(navigationStrings.OrderPayment)}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>
          <View style={styles.card}>
            <Image
              source={require('../../assets/images/dashboard1.jpg')}
              style={styles.cardImage}
            />
            <View style={styles.cardRight}>
              <Text style={styles.cardName}>Addictive Beauty</Text>
              <Text style={styles.cardInfo}>
                West Minister Business Road, UK.
              </Text>
              <View style={styles.starIcon}>
                <CustomIcons tag="Entypo" name="star" style={styles.stars} />
                <CustomIcons tag="Entypo" name="star" style={styles.stars} />
                <CustomIcons tag="Entypo" name="star" style={styles.stars} />
                <CustomIcons tag="Entypo" name="star" style={styles.stars} />
                <CustomIcons tag="Entypo" name="star" style={styles.stars} />
              </View>
            </View>
          </View>

          <Text style={styles.title}>Appointment Date & Time</Text>
          <Text style={styles.dateAndTime}>12, March 2022 - 05:00 PM</Text>

          <Text style={styles.title}>Selected Service</Text>
          <View style={styles.serviceCard}>
            <View style={styles.design}></View>
            <View style={styles.cardLeft}>
              <Text style={styles.cardLeftTitle}>Mens haircut</Text>
              <Text style={styles.cardLeftDuration}>45 munutes</Text>
            </View>
            <Text style={styles.serviceCardRight}>$40</Text>
          </View>

          <Text style={styles.title}>Apply Promocode</Text>
          <View style={styles.textContainers}>
            {(borders.code || data.code.length > 0) && (
              <Text style={styles.focusedText}>Enter Code</Text>
            )}
            <TextInput
              placeholder={placeholder.code}
              style={styles.inputText}
              onFocus={() => handleFocus('code')}
              onBlur={() => handleBlur('code', 'Enter Code')}
              selectionColor={colors.main}
              value={data.code}
              onChangeText={text => handleData('code', text)}
            />
          </View>
          <Pressable style={styles.applyCode}>
            <Text style={styles.applyCodeText}>Apply</Text>
          </Pressable>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>Total Payable</Text>
        <Text style={styles.bottomPrice}>$40</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  inner: {
    padding: '12@s',
    width: Dimensions.WIDTH,
  },
  card: {
    flexDirection: 'row',
    paddingVertical: '12@s',
    alignItems: 'flex-start',
  },
  cardImage: {
    width: '80@s',
    height: '80@s',
    marginRight: '20@s',
    borderRadius: '8@s',
  },
  cardRight: {
    width: '66%',
  },
  cardName: {
    fontFamily: fonts.GothamBold,
    fontSize: '16@s',
    color: colors.white,
  },
  cardInfo: {
    fontFamily: fonts.GothamBook,
    fontSize: '14@s',
    color: colors.lightGrey,
  },
  starIcon: {
    flexDirection: 'row',
  },
  stars: {
    fontSize: '20@s',
    color: colors.rating,
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: fonts.GothamBold,
    color: colors.white,
    fontSize: '14@s',
    paddingTop: '24@s',
    paddingBottom: '6@s',
  },
  dateAndTime: {
    textTransform: 'uppercase',
    fontFamily: fonts.GothamBook,
    color: colors.white,
    fontSize: '12@s',
  },
  serviceCard: {
    backgroundColor: colors.secondary,
    marginBottom: '2@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10@s',

    paddingLeft: '20@s',
    position: 'relative',
  },
  design: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '10@s',
    backgroundColor: colors.main,
    zIndex: 1,
  },
  cardLeft: {
    width: '80%',
  },
  cardLeftTitle: {
    color: colors.white,
    fontFamily: fonts.GothamBold,
    fontSize: '14@s',
    lineHeight: '14@s',
  },
  cardLeftDuration: {
    color: colors.lightGrey,
    fontFamily: fonts.GothamBook,
    fontSize: '12@s',
  },
  serviceCardRight: {
    width: '20%',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.main,
    fontFamily: fonts.GothamBold,
    fontSize: '16@s',
  },
  textContainers: {
    marginTop: '2@s',
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
    borderBottomColor: colors.main,
    borderBottomWidth: '1@s',
  },
  applyCode: {
    backgroundColor: colors.main,
    width: '100@s',
    paddingVertical: '8@s',
    marginTop: '8@s',
    alignSelf: 'flex-end',
    marginRight: '10@s',
  },
  applyCodeText: {
    fontFamily: fonts.GothamBold,
    fontSize: '16@s',
    color: colors.white,
    textAlign: 'center',
  },
  bottom: {
    backgroundColor: colors.main,
    width: Dimensions.WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '12@s',
  },
  bottomText: {
    fontFamily: fonts.GothamBold,
    fontSize: '16@s',
    color: colors.white,
  },
  bottomPrice: {
    fontFamily: fonts.GothamBold,
    fontSize: '20@s',
    color: colors.white,

  },
});

export default ConfirmScreen;
