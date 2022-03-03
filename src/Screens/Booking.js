//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import Header from '../components/Header';
import Dimensions from '../constants/Dimensions';
import {ScaledSheet} from 'react-native-size-matters';
import UpcomingAppointments from '../components/UpcomingAppointments';
import PastAppoinments from '../components/PastAppoinments';
import * as Animatable from 'react-native-animatable';
import navigationStrings from '../constants/navigationStrings';

// create a component
const NothingFound = ({value, animation}) => {
  return (
    <Animatable.View animation={animation} style={styles.nothingFound}>
      <Text style={styles.title}>You have no {value} appointments</Text>
      <Text style={styles.desc}>
        Your {value} appointments will show up here.
      </Text>
    </Animatable.View>
  );
};
const Booking = ({navigation}) => {
  const [isBtnActive, setIsBtnActive] = useState(1);
  const [isUpcommingAppointment, setIsUpcommingAppointment] = useState(true);
  const [isPastAppointment, setIsPastAppointment] = useState(true);

  useEffect(() => {
    setIsBtnActive(1)
  },[])
  const trackOrder = ()=>{
    navigation.navigate(navigationStrings.TrackingScreen)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header leftText="Appoinments" />

      <View style={styles.btnContainer}>
        <Pressable
          style={isBtnActive ? styles.btnActive : styles.btnInActive}
          onPress={() => setIsBtnActive(1)}>
          <Text style={isBtnActive ? styles.btnText : styles.inActiveBtnText}>
            Upcoming
          </Text>
        </Pressable>
        <Pressable
          style={isBtnActive ? styles.btnInActive : styles.btnActive}
          onPress={() => setIsBtnActive(0)}>
          <Text style={isBtnActive ? styles.inActiveBtnText : styles.btnText}>
            Past
          </Text>
        </Pressable>
      </View>

      {isBtnActive ? (
        isUpcommingAppointment ? (
          <Animatable.View animation="bounceInRight" style={styles.inner}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
              {/* {[1,2,3,4,5,6].map(item => ( */}
                <UpcomingAppointments  onPress={trackOrder} />
              {/* ))} */}
            </ScrollView>
          </Animatable.View>
        ) : (
          <NothingFound value="upcoming" animation="bounceInRight" />
        )
      ) : isPastAppointment ? (
        <Animatable.View animation="bounceInLeft" style={styles.inner}>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll} >
          {["Completed","Cancelled","Cancelled","Completed","Completed","Completed"].map((item,i) => (
                <PastAppoinments key={i} title={item}/>

              ))}
          </ScrollView>
        </Animatable.View>
      ) : (
        <NothingFound value="past" animation="bounceInLeft" />
      )}
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
  btnContainer: {
    flexDirection: 'row',
    width: Dimensions.WIDTH * 0.95,
    justifyContent: 'center',
    marginTop: '20@s',
  },
  btnActive: {
    height: '40@s',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:colors.main,
    borderBottomColor: colors.main,
    borderBottomWidth: '2@s',
    flex: 1,
  },
  btnInActive: {
    height: '40@s',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
  },
  btnText: {
    fontSize: '14@s',
    textTransform: 'uppercase',
    fontFamily: fonts.GothamBold,
    color: colors.main,
  },
  inActiveBtnText: {
    fontSize: '14@s',
    textTransform: 'uppercase',
    fontFamily: fonts.GothamBold,
    color: 'grey',
  },
  inner: {
    width: Dimensions.WIDTH,
    padding: '12@s',
  },
  scroll:{
    marginBottom:'100@s',
  },
  nothingFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.WIDTH * 0.9,
  },
  title: {
    fontSize: '16@s',
    marginBottom: '10@s',
    fontFamily: fonts.GothamBold,
    color: colors.main,
    textAlign: 'center',
    lineHeight: '14@s',
    width: Dimensions.WIDTH * 0.9,
  },
  desc: {
    fontSize: '14@s',
    alignItems: 'center',
    fontFamily: fonts.GothamBook,
    color: colors.lightGrey,
    textAlign: 'center',
    lineHeight: '14@s',
  },
});

export default Booking;
