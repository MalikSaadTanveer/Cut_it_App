import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import {
  Auth,
  SplashScreen,
  EditProfile,
  ChangePassword,
  FeedbackAndSupport,
  PaymentMethod,
  BarberDetail,
  ConfirmScreen,
  OrderPayment,
  TrackingScreen,
  Notifications
} from '../Screens';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={navigationStrings.Splash}
          component={SplashScreen}
        />
        <Stack.Screen name={navigationStrings.Auth} component={Auth} />
        <Stack.Screen name={navigationStrings.Tab} component={TabRoutes} />
        <Stack.Screen
          name={navigationStrings.EditProfile}
          component={EditProfile}
        />
        <Stack.Screen
          name={navigationStrings.ChangePassword}
          component={ChangePassword}
        />
        <Stack.Screen
          name={navigationStrings.FeedbackAndSupport}
          component={FeedbackAndSupport}
        />
        <Stack.Screen
          name={navigationStrings.PaymentMethod}
          component={PaymentMethod}
        />
        <Stack.Screen
          name={navigationStrings.BarberDetail}
          component={BarberDetail}
        />
        <Stack.Screen
          name={navigationStrings.ConfirmScreen}
          component={ConfirmScreen}
        />
        <Stack.Screen
          name={navigationStrings.OrderPayment}
          component={OrderPayment}
        />
        <Stack.Screen
          name={navigationStrings.TrackingScreen}
          component={TrackingScreen}
        />
        <Stack.Screen
          name={navigationStrings.Notifications}
          component={Notifications}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
