//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity, Keyboard} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import fonts from '../constants/fonts';
import CustomIcons from './CustomIcons';

// create a component
const SearchBar = () => {
    useEffect(() => {
        const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
            Keyboard.dismiss();
        });
        return () => {
            keyboardHide.remove()
        }
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <TextInput placeholder="Barbers - Current Location" 
                style={styles.inputText}
                selectionColor={colors.main}
                placeholderTextColor={colors.lightGrey}
                />
                <TouchableOpacity style={styles.iconContainer}>
                <CustomIcons tag="AntDesign" name="search1" style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = ScaledSheet.create({
    container: {
        width: Dimensions.WIDTH,
        padding: '12@s',
        backgroundColor: colors.background,
    },
    inner:{
        position:'relative',
    },
    inputText:{
        backgroundColor: colors.secondary,
        fontSize: '14@s',
        fontFamily: fonts.GothamBold,
        paddingLeft:'10@s',
        paddingRight:'60@s',
        borderColor: colors.main,
        borderWidth:1,
        borderRadius:'6@s',
        paddingVertical:'8@s'
    },
    iconContainer:{
        position:'absolute',
        right:'10@s',
        top:'3@s',

    },
    icon:{        
        padding:'8@s',
        color:colors.main,
        backgroundColor: colors.black,
        fontSize:'20@s'
    },
});

//make this component available to the app
export default SearchBar;
