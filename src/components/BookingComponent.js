//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import * as Animatable from 'react-native-animatable';
import CustomIcons from './CustomIcons';
import {ScaledSheet} from 'react-native-size-matters';
import fonts from '../constants/fonts';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ServicesComponent from './ServicesComponent';
import TimeSlots from './TimeSlots';
import BookNowButton from './BookNowButton';
import LinearGradient from 'react-native-linear-gradient';
// import LinearGradient from 'react-native-linear-gradient';
// create a component
const BookingComponent = () => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [monthYear, setMonthYear] = useState({
    month: month[new Date().getMonth()],
    year: new Date().getFullYear(),
    date: new Date().getDate(),
    day: dayName[new Date().getDay()],
  });
  //   const [dayArray, setdayArray] = useState([])
  // useEffect(() => {}, []);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = value => {
    setMonthYear({
      month: month[value.getMonth()],
      year: value.getFullYear(),
      date: value.getDate(),
      day: dayName[value.getDay()],
    });
    hideDatePicker();
  };

  return (
    <Animatable.View animation="slideInUp" style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Pressable onPress={showDatePicker}>
        <LinearGradient style={styles.inner}  colors={colors.gradient2}
            start={{x: 0.1, y: 0.1}}
            end={{x: 0.1, y: 1}}>
          {/* <View style={styles.month}>
            <CustomIcons
              tag="Ionicons"
              name="chevron-back"
              style={styles.monthIcon}
            />
            <Text style={styles.monthText}>
              {monthYear.month}, {monthYear.year}
            </Text>
            <CustomIcons
              tag="Ionicons"
              name="chevron-forward"
              style={styles.monthIcon}
            />
          </View> */}
          {/* <View style={styles.month}>
            {dayName.map((item, i) => (
              <View key={i} style={styles.daysContainer}>
                <Text style={styles.dayText}>{item}</Text>
                <Text style={styles.dateText}>{i+1}</Text>
              </View>
            ))}

          </View> */}
          <View style={styles.date}>
            <Text style={styles.dateText}>{monthYear.date}</Text>
            <Text style={styles.day}>{monthYear.day}</Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>{monthYear.month}</Text>
            <CustomIcons
              tag="AntDesign"
              name="caretdown"
              style={styles.caretDownIcon}
            />
          </View>
          <View style={styles.year}>
            <Text style={styles.yearText}>2022</Text>
            <CustomIcons
              tag="AntDesign"
              name="caretdown"
              style={styles.caretDownIcon}
            />
          </View>
        </LinearGradient>
        </Pressable>
        <TimeSlots />
        <ServicesComponent />
      </ScrollView>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={date => {
          handleConfirm(date);
        }}
        onCancel={hideDatePicker}
      />
      <BookNowButton text="Book Now" />
    </Animatable.View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
    width: Dimensions.WIDTH,
    position: 'relative',
    paddingBottom: '50@s',
  },
  inner: {
    paddingHorizontal: '12@s',
    backgroundColor: colors.main,
    marginTop: '10@s',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '8@s',
  },
  date: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    // paddingVertical: '8@s',
    // borderRightColor: colors.lightGrey,
    // borderRightWidth: 1,
    // backgroundColor:'blue'
  },
  dateText: {
    fontSize: '30@s',
    color: colors.white,
    fontFamily: fonts.GothamBold,
  },
  day: {
    fontSize: '16@s',
    color: colors.white,
    fontFamily: fonts.GothamBook,
    textTransform: 'uppercase',
  },
  caretDownIcon: {
    color: colors.white,
  },
  month: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: '8@s',
    // borderRightColor: colors.lightGrey,
    // borderRightWidth: 1,
    // backgroundColor:'red'


  },
  monthText: {
    fontSize: '18@s',
    color: colors.white,
    fontFamily: fonts.GothamBook,
    marginRight: '10@s',
  },
  year: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: '8@s',

  },
  yearText: {
    fontSize: '18@s',
    color: colors.white,
    fontFamily: fonts.GothamBook,
    marginRight: '10@s',
  },

  // month: {
  //   width: '100%',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingVertical: '10@s',
  //   justifyContent: 'space-evenly',
  // },
  // monthIcon: {
  //   fontSize: '20@s',
  //   color: colors.white,
  // },
  // monthText: {
  //   fontFamily: fonts.GothamBold,
  //   color: colors.white,
  //   fontSize: '16@s',
  // },
  // dayText: {
  //   fontFamily: fonts.GothamBold,
  //   color: colors.white,
  //   fontSize: '14@s',
  // },
  // dateText: {
  //   fontFamily: fonts.GothamMedium_1,
  //   color: colors.white,
  //   fontSize: '14@s',
  //   marginTop: '2@s',
  // },
  // daysContainer: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});

//make this component available to the app
export default BookingComponent;