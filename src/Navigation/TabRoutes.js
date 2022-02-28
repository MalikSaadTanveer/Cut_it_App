import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import colors from '../constants/colors'
import {Home,Booking,Rewards,Search,Settings} from '../Screens'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ScaledSheet } from 'react-native-size-matters';
import SettingStack from './SettingStack'
const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarLabelStyle:{
                display:'none'
            },
            tabBarStyle:{
                backgroundColor:colors.background,
                borderTopColor:colors.main,
                borderTopWidth:1,
                
            }
            }} 
            >
        <Tab.Screen name={navigationStrings.Home} component={Home} 
            options={{
                tabBarIcon:({focused})=>(<AntDesign name="home" style={styles.icons} color={focused ? colors.main:colors.lightGrey}/>)
            }}
        />
        <Tab.Screen name={navigationStrings.Search} component={Search} 
            options={{
                tabBarIcon:({focused})=>(<AntDesign name="search1" style={styles.icons} color={focused ? colors.main:colors.lightGrey}/>)
            }}
        />
        <Tab.Screen name={navigationStrings.Rewards} component={Rewards} 
            options={{
                tabBarIcon:({focused})=>(<Ionicons name="flower-outline" style={styles.icons} color={focused ? colors.main:colors.lightGrey}/>)
            }}
        />
        <Tab.Screen name={navigationStrings.Booking} component={Booking} 
            options={{
                tabBarIcon:({focused})=>(<Feather name="book-open" style={styles.icons} color={focused ? colors.main:colors.lightGrey}/>)
            }}
        />
        <Tab.Screen name={navigationStrings.Settings} component={Settings} 
            options={{
                tabBarIcon:({focused})=>(<AntDesign name="setting" style={styles.icons} color={focused ? colors.main:colors.lightGrey}/>)
            }}
        />
      </Tab.Navigator>
    );
};

const styles = ScaledSheet.create({
    icons:{
        fontSize:'24@s'
    }
})

export default TabRoutes;
