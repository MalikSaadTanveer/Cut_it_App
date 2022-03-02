//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import Dimensions from '../constants/Dimensions';
import * as Animatable from 'react-native-animatable';
import {ScaledSheet} from 'react-native-size-matters';
import { ScrollView } from 'react-native';

const ServicesComponent = () => {
    const [selected, setSelected] = useState(null)
  const services = [
    {
      name: 'Mens haircut',
      duration: '45 munutes',
      price: '$40',
    },
    {
      name: 'Kids haircut',
      duration: '30 munutes',
      price: '$20',
    },
    {
      name: 'Beard and hairline',
      duration: '15 munutes',
      price: '$15',
    },
    {
      name: 'Taper',
      duration: '30 munutes',
      price: '$40',
    },
    {
      name: 'Designer Style haircut such As Afro taper, Mohawk, Frohawks, etc',
      duration: '45 munutes',
      price: '$45',
    },
    {
      name: 'Striaght razor shave',
      duration: '30 munutes',
      price: '$35',
    },
  ];
  const handleClick = (i)=>{
      setSelected(i)
  }
  return (
    <Animatable.View animation="slideInUp" style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false} >
      <Text style={styles.title}>Select Services</Text>
      <View style={styles.inner}>
        {services.map((item, i) => (
          <Pressable key={i} style={styles.card} onPress={()=>handleClick(i)}>
          <View style={[styles.design,{backgroundColor:selected == i?colors.main:'grey' }]}></View>
            <View style={styles.cardLeft}>
                <Text style={styles.cardLeftTitle}>{item.name}</Text>
                <Text style={styles.cardLeftDuration}>{item.duration}</Text>
            </View>
            <Text style={[styles.cardRight,{color:selected == i?colors.main:colors.white }]}>{item.price}</Text>
          </Pressable>
        ))}
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
  title: {
    textTransform: 'uppercase',
    fontFamily: fonts.GothamBold,
    color: colors.white,
    fontSize: '14@s',
    padding: '12@s',
    alignSelf: 'flex-start',
    marginTop: '20@s',
    // backgroundColor:'red'
  },
  inner:{
    paddingHorizontal: '12@s',
    width: Dimensions.WIDTH,
    paddingBottom:'10@s'
  },
  card:{
      backgroundColor: colors.secondary,
      marginBottom: '2@s',
      flexDirection: 'row',
      justifyContent:'space-between',
      padding: '10@s',
      paddingLeft:'20@s',
      position:'relative',
  },
  design:{
    position:'absolute',
    top:0,
    height:'100%',
    width:'10@s',
    backgroundColor:colors.main,
    zIndex:1,


  },
  cardLeft:{
    width:'80%',
  },
  cardLeftTitle: {
    color: colors.white,
    fontFamily: fonts.GothamBold,
    fontSize: '14@s',
    lineHeight:'14@s'
  },
  cardLeftDuration:{
    color: colors.lightGrey,
    fontFamily: fonts.GothamBook,
    fontSize: '12@s',

  },
  cardRight:{
    width:'20%',
    alignSelf:'center',
    textAlign:'center',
    color: colors.white,
    fontFamily: fonts.GothamBold,
    fontSize: '16@s',

  }
});

//make this component available to the app
export default ServicesComponent;
