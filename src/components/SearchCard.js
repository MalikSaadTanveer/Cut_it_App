//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList,TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import fonts from '../constants/fonts';
import navigationStrings from '../constants/navigationStrings';
import SearchList from '../constants/SearchList';
import CustomIcons from './CustomIcons';

// create a component
const SearchCard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={SearchList}
        numColumns={2}
        style={styles.flatList}
        renderItem={element => (
          <TouchableOpacity key={element.index} style={styles.card} onPress={() => navigation.navigate(navigationStrings.BarberDetail)}>
            <View style={styles.cardPrice}>
              <Text style={styles.cardPriceText}>{element.item.price}</Text>
            </View>

            <Image
              source={{uri: element.item.image}}
              style={styles.cardImage}
            />
            <View style={styles.descContainer}>
              <Text style={styles.descName}>{element.item.name}</Text>
              <View style={styles.cardBottom}>
                <View style={styles.cardBottomLeft}>
                  <Text style={styles.cardBottomText}>{element.item.stars}</Text>
                  <CustomIcons tag="Entypo" name="star" style={styles.stars}/>
                  <CustomIcons tag="Entypo" name="star" style={styles.stars}/>
                  <CustomIcons tag="Entypo" name="star" style={styles.stars}/>
                  <CustomIcons tag="Entypo" name="star" style={styles.stars}/>
                  <CustomIcons tag="Entypo" name="star" style={styles.stars}/>
                  <Text style={styles.cardBottomText}>({element.item.orders})</Text>
                </View>
                <View style={styles.cardBottomRight}>
                <CustomIcons tag="FontAwesome" name="location-arrow" style={styles.location}/>
                <Text style={[styles.cardBottomText,{color:colors.white}]}>{element.item.distance}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// define your styles
const styles = ScaledSheet.create({
  container: {
    width: Dimensions.WIDTH,
    paddingHorizontal: '12@s',
  },
  flatList: {
    marginBottom: Dimensions.WIDTH * 0.32,
  },
  card: {
    position: 'relative',
  },
  cardPrice: {
    position: 'absolute',
    top: '12@s',
    backgroundColor: 'rgba(0,0,0,0.6)',
    margin: Dimensions.WIDTH * 0.004,
    paddingVertical: '4@s',
    paddingLeft: '20@s',
    paddingRight: '8@s',
    borderTopRightRadius: '10@s',
    borderBottomRightRadius: '10@s',
    zIndex: 1,
    borderWidth:2,
    borderTopColor:colors.main,
    borderRightColor:colors.main,
    borderBottomColor:colors.main,
  },
  cardPriceText: {
    fontFamily: fonts.GothamBold,
    color: colors.white,
  },
  cardImage: {
    width: Dimensions.WIDTH * 0.46,
    height: Dimensions.WIDTH * 0.46,
    margin: Dimensions.WIDTH * 0.004,
    borderRadius:'10@s'
  },
  descContainer: {
    width: Dimensions.WIDTH * 0.46,
    height: Dimensions.WIDTH * 0.14,
    margin: Dimensions.WIDTH * 0.004,
    marginBottom: 0,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: '4@s',
    paddingVertical: '4@s',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.6)',
    // backgroundColor: 'red',
    borderBottomLeftRadius:'10@s',
    borderBottomRightRadius:'10@s',
    borderTopColor:colors.main,
    borderTopWidth:2
  },
  descName: {
    fontFamily: fonts.GothamBold,
    color: colors.white,
    fontSize:'14@s'
  },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  cardBottomText:{
    marginRight:'2@s',
    fontFamily:fonts.GothamBook,
    color:'rgb(253, 204, 13)',
    fontSize:'10@s',
  },
  stars:{
    color:'rgb(253, 204, 13)',
  },
  cardBottomLeft:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardBottomRight:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  location:{
      color:colors.white,
      marginRight:'2@s',
  }
});

//make this component available to the app
export default SearchCard;
