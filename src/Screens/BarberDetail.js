//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import DashboardIamgeComponent from '../components/DashboardIamgeComponent';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import Dimensions from '../constants/Dimensions';
import InfoComponent from '../components/InfoComponent';
import BookingComponent from '../components/BookingComponent';
import ReviwesComponents from '../components/ReviewsComponent';
import ServicesComponent from '../components/ServicesComponent';
import CustomIcons from '../components/CustomIcons';

// create a component
const BarberDetail = () => {
  const [isActive, setIsActive] = useState({
    info: true,
    booking: false,
    reviews: false,
    services: false,
  });

  const handleClick = value => {
    setIsActive({
      info: false,
      booking: false,
      reviews: false,
      services: false,
      [value]: true,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.header}>
          <View style={styles.headerItem}>
            <CustomIcons
              tag="AntDesign"
              name="adduser"
              style={styles.headerIcon}
            />
            {/* <Text style={styles.headerText}>Add</Text> */}
          </View>
          <View style={styles.headerItem}>
            <CustomIcons
              tag="FontAwesome5"
              name="share-square"
              style={styles.headerIcon}
            />
            {/* <Text style={styles.headerText}>Share</Text> */}
          </View>
        </View>
        <DashboardIamgeComponent
          mainImage={require('../../assets/images/dashboard1.jpg')}
          modalImage={require('../../assets/images/dashboard1.jpg')}
        />
        <View style={styles.tabsContainer}>
          <ScrollView
            horizontal
            style={styles.tabs}
            showsHorizontalScrollIndicator={false}>
            <Text
              style={[styles.tabsButton, isActive.info && styles.activeTab]}
              onPress={() => handleClick('info')}>
              Info
            </Text>
            <Text
              style={[styles.tabsButton, isActive.booking && styles.activeTab]}
              onPress={() => handleClick('booking')}>
              Booking
            </Text>
            <Text
              style={[styles.tabsButton, isActive.reviews && styles.activeTab]}
              onPress={() => handleClick('reviews')}>
              Reviews
            </Text>
            <Text
              style={[styles.tabsButton, isActive.services && styles.activeTab]}
              onPress={() => handleClick('services')}>
              Services
            </Text>
          </ScrollView>
        </View>
      </View>

      {(isActive.info && <InfoComponent />) ||
        (isActive.booking && <BookingComponent />) ||
        (isActive.reviews && <ReviwesComponents />) ||
        (isActive.services && <ServicesComponent />)}
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
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    right:'4@s',
    top:'4@s',
    zIndex:2
  },
  headerItem: {
    alignItems: 'center',
    paddingVertical: '4@s',
  },
  headerIcon: {
    fontSize: '16@s',
    padding: '8@s',
    borderRadius: '50@s',
    backgroundColor: colors.background,
    color: colors.main,
    marginRight:'4@s'
  },
  headerText: {
    textTransform: 'uppercase',
    fontFamily: fonts.GothamMedium_1,
    color: colors.main,
    fontSize: '10@s',
  },
  tabsContainer: {
    height: '40@s',
    position: 'absolute',
    bottom: 0,
    zIndex: 22,
  },
  tabs: {
    // backgroundColor: 'blue',
    flexGrow: 1,
    width: Dimensions.WIDTH,
  },
  tabsButton: {
    fontSize: '14@s',
    width: Dimensions.WIDTH * 0.312,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8@s',
    fontFamily: fonts.GothamBold,
    textTransform: 'uppercase',
  },
  activeTab: {
    borderColor: colors.main,
    borderBottomWidth: 2,
    color: colors.main,
  },
});

//make this component available to the app
export default BarberDetail;
