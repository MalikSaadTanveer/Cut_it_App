//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image ,Dimensions} from 'react-native';
import colors from '../constants/colors';
import * as Animatable from 'react-native-animatable';
import navigationStrings from '../constants/navigationStrings';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
// create a component
const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace(navigationStrings.Auth)
        }, 4000);
    
      
    }, [])
    
    return (
        <View  style={styles.container}>
            <Animatable.Image source={require('../../assets/images/light-logo.png')}
                resizeMode="contain"
                style={styles.logo}
                animation="zoomIn" iterationCount="infinite" direction="alternate"
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    logo:{
        // backgroundColor: colors.main,
        width: WIDTH * 0.7,
        height: WIDTH * 0.6
    }
});

export default SplashScreen;
