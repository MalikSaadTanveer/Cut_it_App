import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import {Auth,SplashScreen} from '../Screens'
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name={navigationStrings.Splash} component={SplashScreen} />
        <Stack.Screen name={navigationStrings.Auth} component={Auth} />
        <Stack.Screen name={navigationStrings.Tab} component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
