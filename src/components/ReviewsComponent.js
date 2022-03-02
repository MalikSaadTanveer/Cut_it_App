//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import * as Animatable from 'react-native-animatable';
import Entypo from 'react-native-vector-icons/Entypo';
import {ScaledSheet} from 'react-native-size-matters';
import fonts from '../constants/fonts';
import {ScrollView, Image} from 'react-native';
import CustomIcons from './CustomIcons';
// create a component
const ReviwesComponents = () => {
  let reviews = [
    {
      img: require('../../assets/images/dashboard1.jpg'),
      name: 'Customer',
      date:'24 Dec 2021',
      rating:5,
    },
    {
      img: require('../../assets/images/dashboard1.jpg'),
      name: 'Customer',
      date:'18 Nov 2021',
      rating:3,
      description:'Lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adip'
    },
    {
      img: require('../../assets/images/dashboard1.jpg'),
      name: 'Customer',
      date:'21 Jan 2021',
      rating:4,
      
    },
    {
      img: require('../../assets/images/dashboard1.jpg'),
      name: 'Customer',
      date:'10 Jan 2021',
      rating:5,
    },
    {
      img: require('../../assets/images/dashboard1.jpg'),
      name: 'Customer',
      date:'2 Jan 2021',     
      rating:1,
      description:'Lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adip'

    },
  ];
  return (
    <Animatable.View animation="slideInUp" style={styles.container}>
      <ScrollView>
        <View style={styles.inner}>
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Text style={styles.rowLeftText}>5</Text>
              <Entypo name="star" style={styles.rowLeftIcon} />
            </View>
            <View style={styles.rowMid}>
              <View style={[styles.rowMidInner, styles.rowMidInner1]}></View>
            </View>
            <Text style={styles.rowRight}>100%</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Text style={styles.rowLeftText}>4</Text>
              <Entypo name="star" style={styles.rowLeftIcon} />
            </View>
            <View style={styles.rowMid}>
              <View style={[styles.rowMidInner, styles.rowMidInner2]}></View>
            </View>
            <Text style={styles.rowRight}>75%</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Text style={styles.rowLeftText}>3</Text>
              <Entypo name="star" style={styles.rowLeftIcon} />
            </View>
            <View style={styles.rowMid}>
              <View style={[styles.rowMidInner, styles.rowMidInner3]}></View>
            </View>
            <Text style={styles.rowRight}>45%</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Text style={styles.rowLeftText}>2</Text>
              <Entypo name="star" style={styles.rowLeftIcon} />
            </View>
            <View style={styles.rowMid}>
              <View style={[styles.rowMidInner, styles.rowMidInner4]}></View>
            </View>
            <Text style={styles.rowRight}>20%</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Text style={styles.rowLeftText}>1</Text>
              <Entypo name="star" style={styles.rowLeftIcon} />
            </View>
            <View style={styles.rowMid}>
              <View style={[styles.rowMidInner, styles.rowMidInner5]}></View>
            </View>
            <Text style={styles.rowRight}>10%</Text>
          </View>

          <Text style={styles.title}>Reviews</Text>
          <View style={styles.viewAllReviews}>
{
    reviews.map((item, index) =>(
        <View key={index} style={styles.card}>
              <View style={styles.cardTop}>
                <View style={styles.cardTopInner}>
                  <Image
                    source={item.img}
                    style={styles.avatar}
                  />
                  <View>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                  </View>
                </View>
                <View style={styles.ratingContainer}>
                  {[1, 2, 3, 4, 5].map((count, index) => (
                      count<=item.rating?
                    <CustomIcons key={index} tag="Entypo" name="star" style={styles.ratingStars}/>:
                    <CustomIcons key={index} tag="Entypo" name="star-outlined" style={styles.ratingStars}/>

                  ))}
                </View>
              </View>
              {item.description && 
              <Text style={styles.description}>
                {item.description}
              </Text>
            }
            </View>
    ))
}
            
          </View>
        </View>
      </ScrollView>
    </Animatable.View>
  );
};

// define your styles
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
    width: Dimensions.WIDTH,
  },
  inner: {
    padding: '12@s',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: '2%',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
    width: '10%',
    justifyContent: 'center',
  },
  rowLeftText: {
    fontSize: '14@s',
    fontFamily: fonts.GothamBold,
  },
  rowLeftIcon: {
    marginTop: '2@s',
    fontSize: '14@s',
    marginLeft: '2@s',
    color: colors.main,
  },
  rowMid: {
    width: '74%',
    height: '18@s',
    marginRight: '6@s',
    backgroundColor: colors.secondary,
    position: 'relative',
    borderRadius: 50,
  },
  rowMidInner: {
    height: '18@s',
    backgroundColor: colors.main,
    position: 'absolute',
    borderRadius: 50,
  },
  rowRight: {
    fontSize: '14@s',
    fontFamily: fonts.GothamBold,
    width: '16%',
  },
  rowMidInner1: {
    width: '85%',
  },
  rowMidInner2: {
    width: '65%',
  },
  rowMidInner3: {
    width: '45%',
  },
  rowMidInner4: {
    width: '25%',
  },
  rowMidInner5: {
    width: '15%',
  },
  avatar: {
    width: '40@s',
    height: '40@s',
    borderRadius: '20@s',
    marginRight: '8@s',
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: fonts.GothamBold,
    color: colors.white,
    fontSize: '14@s',
    paddingTop: '12@s',
    paddingBottom: '8@s',
    alignSelf: 'flex-start',
    marginTop: '20@s',
    // backgroundColor:'red'
  },
  viewAllReviews:{
    // backgroundColor: 'red',
    // paddingHorizontal: '12@s',
    // marginTop:'20@s',
  },
  card: {
    backgroundColor: colors.secondary,
    padding: '4@s',
    paddingHorizontal: '8@s',
    borderRadius: '8@s',
    marginBottom: '2@s',
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:'2@s'
  },
  cardTopInner: {
    flexDirection: 'row',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  name: {
    fontFamily: fonts.GothamBold,
    fontSize: '14@s',
    marginBottom: '2@s',
    color: colors.white,
  },
  date: {
    fontFamily: fonts.GothamMedium_1,
    fontSize: '12@s',
    color: colors.lightGrey,
  },
  description: {
    fontFamily: fonts.GothamBook,
    fontSize: '12@s',
    color: colors.white,
    marginTop: '4@s',
    lineHeight:'13@s'
  },
  ratingStars:{
    color:colors.white,
    fontSize:'16@s'
  }
});

//make this component available to the app
export default ReviwesComponents;
