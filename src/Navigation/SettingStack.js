//import liraries
import React from 'react';
import { View, Text, } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import navigationStrings from '../constants/navigationStrings';
import {
    Settings,
    EditProfile,
    ChangePassword,
    FeedbackAndSupport,
    PaymentMethod 
}from '../Screens'
const Stack = createNativeStackNavigator();
const SettingStack = () => {
    
    return (
        // <Stack.Navigator 
        // screenOptions={{headerShown:false,}} >
        <>
            {/* <Stack.Screen name={navigationStrings.Settings} component={Settings} /> */}
            <Stack.Screen name={navigationStrings.EditProfile} component={EditProfile} />
            <Stack.Screen name={navigationStrings.ChangePassword} component={ChangePassword} />
            <Stack.Screen name={navigationStrings.FeedbackAndSupport} component={FeedbackAndSupport} />
            <Stack.Screen name={navigationStrings.PaymentMethod} component={PaymentMethod} />
            </>
        // </Stack.Navigator>
      
    );
};

export default SettingStack;
