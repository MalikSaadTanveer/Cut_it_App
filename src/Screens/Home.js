//import liraries
import React, { Component } from 'react';
import { View, Text, SafeAreaView,Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import DashboardIamgeComponent from '../components/DashboardIamgeComponent';
import DashboardSlides from '../components/DashboardSlides';

import Header from '../components/Header';
import colors from '../constants/colors';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Home = () => {
 
    return (
        <SafeAreaView style={styles.container}>
            <Header leftText="Home" icon />
            

            <DashboardIamgeComponent/>
            
            <DashboardSlides 
                title="My Barbers" desc="Find Barbers" icon={0}
            />
            <DashboardSlides 
                title="My Cuts" desc="Add Photo" icon={1}
            />

        </SafeAreaView>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background,
    },
   
});

export default Home;
