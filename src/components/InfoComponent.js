import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import * as Animatable from 'react-native-animatable';
import {ScaledSheet} from 'react-native-size-matters';
import CustomIcons from './CustomIcons';
import fonts from '../constants/fonts';
import SearchList from '../constants/SearchList';
import LinearGradient from 'react-native-linear-gradient';

const InfoComponent = () => {
  return (
    <Animatable.View animation="slideInUp" style={styles.container}>
      <ScrollView style={styles.inner} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Info</Text>
        <Text style={styles.infoDesc}>
          if you look good, you'll feel good. Look and feel good with great
          haircut!
        </Text>
        <View style={styles.contactContainer}>
          <CustomIcons tag="Feather" name="phone-call" style={styles.contactIcon} />
          <CustomIcons tag="FontAwesome" name="whatsapp" style={styles.contactIcon} />
          <Text style={styles.contactNumber}>+123456789</Text>
        </View>
        <Text style={styles.title}>Photos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {SearchList.map((item, i) => (
            <View key={i} style={styles.imageContainer} elevation={10}>
              <Image source={{uri: item.image}} style={styles.photos} />
            </View>
          ))}
        </ScrollView>

        <Text style={styles.title}>Location</Text>
        <View style={styles.locationContainer}>
          <Image
            source={require('../../assets/images/mapview1.png')}
            style={styles.photoLocation}
            resizeMode="cover"
          />
          <LinearGradient
            colors={colors.gradient1}
            start={{x: 0.1, y: 0.1}}
            end={{x: 0.1, y: 1}}
            style={styles.imgOverlay}>
            <Text style={styles.locationTitle}>
              Berea Barbershop And Beauty Salon
            </Text>
            <Text style={styles.locationDesc}>817 N. Rocky River Dr.</Text>
            <Text style={styles.locationDesc}>Berea, OH 44017</Text>
          </LinearGradient>
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
    // backgroundColor: colors.white,
    width: Dimensions.WIDTH,
  },
  inner: {
    // padding: '12@s',
    width: Dimensions.WIDTH,
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: fonts.GothamBold,
    color: colors.white,
    fontSize: '14@s',
    paddingHorizontal: '12@s',
    paddingTop: '12@s',
  },
  infoDesc: {
    paddingHorizontal: '12@s',
    paddingVertical: '4@s',
    color: colors.lightGrey,
    fontFamily: fonts.GothamMedium_1,
    lineHeight: '14@s',
  },
  contactContainer:{
    flexDirection: 'row',
    paddingHorizontal:'12@s',
    paddingTop:'4@s',
    marginBottom:'8@s'
  },
    contactIcon:{
        color: colors.white,
        marginRight:'6@s',
        fontSize: '14@s',
        marginTop:'2@s'
  },
  contactNumber:{
    fontFamily: fonts.GothamBold,
    color: colors.white,
    fontSize: '14@s'
  },
  photos: {
    width: Dimensions.WIDTH * 0.7,
    height: Dimensions.WIDTH * 0.5,
    borderRadius: '20@s',
  },
  imageContainer: {
    marginLeft: '20@s',
    marginRight: '10@s',
    marginBottom: '20@s',
    borderRadius: '20@s',
    paddingTop: '4@s',
    padding: 1,
    // backgroundColor:'red',
    shadowColor: colors.white,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  locationContainer: {
    width: Dimensions.WIDTH,
    height: Dimensions.WIDTH * 0.55,
    paddingHorizontal: '12@s',
    position: 'relative',
    paddingTop: '4@s',
  },
  imgOverlay: {
    width: Dimensions.WIDTH,
    height: Dimensions.WIDTH * 0.56,
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'flex-start',
    padding: '16@s',
    paddingHorizontal: '20@s',
  },
  photoLocation: {
    width: Dimensions.WIDTH * 0.94,
    height: Dimensions.WIDTH * 0.6,
    borderRadius: '4@s',
  },
  locationTitle: {
    fontFamily: fonts.GothamBold,
    color: colors.white,
    marginBottom: '2@s',
  },
  locationDesc: {
    fontFamily: fonts.GothamBook,
    color: colors.white,
  },
});

export default InfoComponent;
