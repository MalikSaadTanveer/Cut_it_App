//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import fonts from '../constants/fonts';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';

// create a component
const Notifications = ({navigation}) => {
  return (
    <View style={styles.outerContainer}>
      <Header
        leftText="Notifications"
        backIcon
        onPress={() => navigation.goBack()}
      />

      <ScrollView style={styles.inner} 
      showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(item => (
          <Pressable key={item}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0.5, y: 1}}
              colors={[colors.main, colors.secondary2]}
              style={styles.container}>
              <View style={styles.main}>
                <Image
                  source={require('../../assets/images/dashboard1.jpg')}
                  style={styles.img}
                />
                <View style={styles.description}>
                  <Text style={styles.name}>Tony Fade</Text>
                  <Text style={styles.service}>New Appointment Component</Text>
                  <Text style={styles.time}>3 days ago</Text>
                </View>
              </View>
            </LinearGradient>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = ScaledSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  inner: {
    width: Dimensions.WIDTH,
    padding: '12@s',
  },
  container: {
    backgroundColor: colors.secondary,
    width: Dimensions.WIDTH * 0.9,
    marginTop: '4@s',
    // marginBottom: '10@s',
    borderRadius: '10@s',
    position: 'relative',
    borderWidth: 1,
    borderColor: colors.main,
  },
  main: {
    padding: '10@s',
    // paddingTop: '30@s',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  img: {
    width: '60@s',
    height: '60@s',
    borderRadius: '30@s',
    marginRight: '10@s',
  },
  description: {
    // backgroundColor: 'red',
    width: '76%',
  },
  name: {
    fontFamily: fonts.GothamBold,
    fontSize: '16@s',
    color: colors.white,
  },
  service: {
    fontFamily: fonts.GothamBook,
    fontSize: '12@s',
    color: colors.lightGrey,
  },
  time: {
    fontFamily: fonts.GothamBook,
    fontSize: '14@s',
    color: colors.lightGrey,
  },
  horizontalLine: {
    height: '2@s',
    backgroundColor: colors.main,
    marginHorizontal: '10@s',
  },
});

//make this component available to the app
export default Notifications;
