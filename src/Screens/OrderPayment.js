import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
  Image,
  SafeAreaView,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import CardDetail from '../components/CardDetail';
import Header from '../components/Header';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import fonts from '../constants/fonts';
import navigationStrings from '../constants/navigationStrings';

const OrderPayment = ({navigation}) => {
  const [cardActive, setCardActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const [design, setDesign] = useState({
    salon: false,
    card: false,
    paypal: false,
    stripe: false,
  });
  
  const handleDesign = name => {
    setDesign({
      salon: false,
      card: false,
      paypal: false,
      stripe: false,
      [name]: true,
    });
    setCardActive(name == 'card');
  };

  const handleModalAndConfirm = ()=>{
      setModalActive(true);

      setTimeout(()=>{
          setModalActive(false);
          navigation.navigate(navigationStrings.TrackingScreen)
      },3000)
  }


  return (
    <SafeAreaView style={styles.container}>
      <Header
        backIcon
        onPress={() => navigation.goBack()}
        leftText="Payment"
        rightText="Order"
        rightPress={handleModalAndConfirm}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>
          <Pressable
            style={styles.payAtSalonContainer}
            onPress={() => handleDesign('salon')}>
            <View
              style={[
                styles.salonOverlay,
                design.salon && styles.salonActiveOverlay,
              ]}></View>
            <Text style={styles.salonText}>Pay at salon</Text>
            <View
              style={[
                styles.circle,
                design.salon && styles.activeCircle,
              ]}></View>
          </Pressable>

          <View style={styles.onlinePayContainer}>
            <Pressable
              style={styles.onlinePayInner}
              onPress={() => handleDesign('card')}>
              <View
                style={[
                  styles.onlinePayOverlay,
                  design.card && styles.onlineActivePayOverlay,
                ]}></View>
              <Text
                style={[
                  styles.onlinePayText,
                  design.card && styles.onlineActivePayText,
                ]}>
                Card
              </Text>
            </Pressable>
            <Pressable
              style={styles.onlinePayInner}
              onPress={() => handleDesign('paypal')}>
              <View
                style={[
                  styles.onlinePayOverlay,
                  design.paypal && styles.onlineActivePayOverlay,
                ]}></View>
              <Text
                style={[
                  styles.onlinePayText,
                  design.paypal && styles.onlineActivePayText,
                ]}>
                Paypal
              </Text>
            </Pressable>
            <Pressable
              style={styles.onlinePayInner}
              onPress={() => handleDesign('stripe')}>
              <View
                style={[
                  styles.onlinePayOverlay,
                  design.stripe && styles.onlineActivePayOverlay,
                ]}></View>
              <Text
                style={[
                  styles.onlinePayText,
                  design.stripe && styles.onlineActivePayText,
                ]}>
                Stripe
              </Text>
            </Pressable>
          </View>
        </View>

        {cardActive && <CardDetail />}
      </ScrollView>
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>Total Payable</Text>
        <Text style={styles.bottomPrice}>$40</Text>
      </View>


      {/* Confirmation Modal */}
      <Modal visible={modalActive} transparent={true} >
        <View style={styles.modalOuter}>
          <View style={styles.modalInner}>
            <Image
              source={require('../../assets/images/success.png')}
              style={styles.modalImage}
            />
            <Text style={styles.modalUpperText}>Payment Successful</Text>
            <Text style={styles.modalLowerText}>Booking Confirmed</Text>
          </View>
        </View>
      </Modal>
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
    width: Dimensions.WIDTH,
    padding: '12@s',
  },
  payAtSalonContainer: {
    backgroundColor: colors.secondary,
    // backgroundColor: 'red',
    height: '50@s',
    alignItems: 'center',
    paddingLeft: '30@s',
    paddingRight: '10@s',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative',
    borderTopRightRadius: '20@s',
    borderBottomRightRadius: '20@s',
  },
  salonOverlay: {
    height: '50@s',
    width: '10@s',
    position: 'absolute',
    left: 0,
    backgroundColor: colors.grey,
  },
  salonActiveOverlay: {
    backgroundColor: colors.main,
  },
  salonText: {
    fontFamily: fonts.GothamBold,
    fontSize: '16@s',
    color: colors.white,
  },
  circle: {
    width: '30@s',
    height: '30@s',
    borderRadius: '15@s',
    backgroundColor: colors.background,
  },
  activeCircle: {
    borderColor: colors.background,
    backgroundColor: colors.main,
    borderWidth: 10,
  },
  onlinePayContainer: {
    //   backgroundColor: 'red',
    marginTop: '20@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  onlinePayInner: {
    position: 'relative',
    width: '32%',
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '60@s',
    paddingBottom: '10@s',
    borderBottomLeftRadius: '20@s',
    borderBottomRightRadius: '20@s',
  },
  onlinePayOverlay: {
    width: '100%',
    height: '10@s',
    position: 'absolute',
    top: 0,
    backgroundColor: colors.grey,
  },
  onlineActivePayOverlay: {
    backgroundColor: colors.main,
  },
  onlinePayText: {
    fontFamily: fonts.GothamBold,
    color: colors.white,
    fontSize: '16@s',
  },
  onlineActivePayText: {
    color: colors.main,
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
  modalOuter: {
    backgroundColor: colors.modalOuter,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInner: {
    backgroundColor: colors.white,
    width: Dimensions.WIDTH * 0.8,
    height: Dimensions.WIDTH * 0.8,
    borderRadius: '10@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImage: {
    width: Dimensions.WIDTH * 0.6,
    height: Dimensions.WIDTH * 0.6,
  },
  modalUpperText: {
    color: colors.background,
    fontFamily: fonts.GothamBook,
    fontSize: '14@s',
  },
  modalLowerText: {
    color: colors.main,
    fontFamily: fonts.GothamBold,
    fontSize: '18@s',
  },
});

//make this component available to the app
export default OrderPayment;
