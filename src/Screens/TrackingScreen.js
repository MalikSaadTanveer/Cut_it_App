//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  BackHandler,
  Image,
  TextInput,
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

// create a component
const TrackingScreen = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [data, setData] = useState('');
  function handleBackButtonClick() {
    navigation.navigate(navigationStrings.Booking);
    return true;
  }
  const handleMessage = ()=>{
    //   console.warn('hello');
    setMessages((pre=>[...pre,data]));
    setData('');
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* <View> */}
      <Header
        backIcon
        onPress={() => navigation.navigate(navigationStrings.Booking)}
        leftText="Appointment"
      />

      <View style={styles.inner}>
        <View style={styles.top}>
          <View style={styles.topLeft}>
            <Image
              source={require('../../assets/images/dashboard1.jpg')}
              style={styles.topImage}
            />
            <View style={styles.topInfo}>
              <Text style={styles.topName}>Tony Fade</Text>
              <Text style={styles.topService}>Kids Haircut </Text>
            </View>
          </View>
          <View style={styles.dateText}>
            <Text style={styles.day}>Thur</Text>
            <Text style={styles.date}>12</Text>
            <Text style={styles.month}>Mar</Text>
          </View>
        </View>

        <View style={styles.middle}>
          <View>
            <Text style={styles.title}>Appointment Date & Time</Text>
            <Text style={styles.dateAndTime}>12, March 2022 - 05:00 PM</Text>
          </View>
          <View style={styles.middleBottom}>
            <View style={styles.iconContainer}>
              <CustomIcons
                tag="Entypo"
                name="location"
                style={styles.location}
              />
              <Text style={styles.iconLocation}>Direction</Text>
            </View>
            <View style={styles.iconContainer}>
              <CustomIcons
                tag="MaterialIcons"
                name="cancel"
                style={styles.cancel}
              />
              <Text style={styles.iconCancel}>Cancel</Text>
            </View>
          </View>
        </View>
      </View>
      {/* </View> */}

      <ScrollView style={styles.scroll}>
        <Text style={styles.scrollLeft}>Welcome to my salon!</Text>
        
        {
            messages.map((item,i)=>(
                <Text key = {i} style={styles.scrollRight}>{item}</Text>
            ))
        }
      </ScrollView>

      <View style={styles.messageBox}>
        <TextInput
          placeholder="Message..."
          placeholderTextColor={colors.lightGrey}
          style={styles.messageText}
          selectionColor={colors.main}
          value={data}
          onChangeText={text => {
            setData(text);
          }}
        />
        <Pressable style={styles.messageButton} >
          <CustomIcons tag="Ionicons" name="send" style={styles.sendIcon} onPress={data ? handleMessage:()=>{}}/>
        </Pressable>
      </View>
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
  inner: {
    width: Dimensions.WIDTH,
    padding: '12@s',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    // backgroundColor: 'red',
    backgroundColor: colors.secondary,
    borderRadius: '4@s',
    paddingVertical: '4@s',
  },
  topLeft: {
    flexDirection: 'row',
  },
  topImage: {
    width: '60@s',
    height: '60@s',
    borderRadius: '30@s',
  },
  topInfo: {
    marginLeft: '14@s',
    width: '60%',
    // backgroundColor:'red',
    justifyContent: 'center',
  },
  topName: {
    fontFamily: fonts.GothamBold,
    fontSize: '16@s',
    color: colors.white,
    marginBottom: '2@s',
  },
  topService: {
    fontFamily: fonts.GothamBook,
    fontSize: '14@s',
    color: colors.lightGrey,
    lineHeight: '14@s',
  },
  dateText: {
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  day: {
    fontFamily: fonts.GothamBold,
    fontSize: '14@s',
    color: colors.main,
  },
  date: {
    fontFamily: fonts.GothamBold,
    fontSize: '18@s',
    color: colors.main,
  },
  month: {
    fontFamily: fonts.GothamBold,
    fontSize: '14@s',
    color: colors.main,
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: fonts.GothamBold,
    color: colors.white,
    fontSize: '14@s',
    paddingTop: '4@s',
    paddingBottom: '6@s',
  },
  dateAndTime: {
    textTransform: 'uppercase',
    fontFamily: fonts.GothamBook,
    color: colors.white,
    fontSize: '12@s',
  },
  middle: {
    backgroundColor: colors.secondary,
    marginTop: '20@s',
    paddingHorizontal: '10@s',
    borderRadius: '4@s',
  },
  middleBottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: '10@s',
  },
  iconContainer: {
    alignItems: 'center',
  },
  location: {
    fontSize: '24@s',
    color: colors.main,
  },
  cancel: {
    fontSize: '24@s',
    color: colors.danger,
  },
  iconLocation: {
    fontFamily: fonts.GothamBold,
    color: colors.main,
    marginTop: '2@s',
  },
  iconCancel: {
    fontFamily: fonts.GothamBold,
    color: colors.danger,
    marginTop: '2@s',
  },
  scroll: {
    width: Dimensions.WIDTH,
    paddingHorizontal: '12@s',
    
  },
  scrollLeft: {
    maxWidth: Dimensions.WIDTH * 0.8,
    alignSelf: 'flex-start',
    backgroundColor: colors.grey,
    padding: '4@s',
    paddingHorizontal: '8@s',
    borderRadius: '6@s',
    fontFamily: fonts.GothamBold,
    fontSize: '14@s',
    marginBottom: '10@s',
    color:colors.white
  },
  scrollRight: {
    maxWidth: Dimensions.WIDTH * 0.8,
    alignSelf: 'flex-end',
    backgroundColor: colors.main,
    padding: '4@s',
    paddingHorizontal: '8@s',
    borderRadius: '6@s',
    fontFamily: fonts.GothamBold,
    fontSize: '14@s',
    marginBottom: '4@s',
    color:colors.white
  },
  messageBox: {
    flexDirection: 'row',
    width: Dimensions.WIDTH,
    paddingHorizontal: '12@s',
    paddingVertical: '4@s',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '4@s'
  },
  messageText: {
    
    width: Dimensions.WIDTH * 0.8,
    paddingLeft: '6@s',
    fontSize: '16@s',
    fontFamily: fonts.GothamBold,
    backgroundColor: colors.secondary,
    borderRadius: '10@s',
    color:colors.white
  },
  messageButton: {
    width: Dimensions.WIDTH * 0.14,
    paddingVertical: '4@s',
    alignItems: 'center',
    borderRadius: '2@s',
    padding: '4@s',

  },
  sendIcon: {
    fontSize: '26@s',
    color: colors.main,
  },
});

//make this component available to the app
export default TrackingScreen;
