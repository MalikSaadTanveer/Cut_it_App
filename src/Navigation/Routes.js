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
  BarberDetail
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
