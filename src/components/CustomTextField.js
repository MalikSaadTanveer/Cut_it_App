//import liraries
import React, { useEffect,useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const MyComponent = ({title,text,placeholder,}) => {
    const [borders, setBorders] = useState(false);
    
      const [data, setData] = useState(
          text ? text : ''
      );
      const handleFocus = name => {
        setBorders(true);
      };
      const handleBlur = name => {
        setBorders(false);
        
      };
    
      const handleData = (value) => {
        setData(value);
      };
    useEffect(() => {
        const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
          Keyboard.dismiss();
        });
        return () => {
          keyboardHide.remove();
        };
      }, []);
    return (
        <View style={styles.textContainers}>
          <Text style={styles.focusedText}>{title}</Text>
          <TextInput
            placeholder={placeholder.Name}
            style={[
              styles.inputText,
              {borderBottomColor: borders.Name ? colors.main : 'transparent'},
            ]}
            onFocus={() => handleFocus('Name')}
            onBlur={() => handleBlur('Name')}
            selectionColor={colors.main}
            value={data.Name}
            onChangeText={text => handleData('Name', text)}
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
        backgroundColor: '#2c3e50',
    },
    textContainers: {
        backgroundColor: colors.secondary,
        marginTop: '2@s',
        padding: '4@s',
      },
      focusedText: {
        fontFamily: fonts.GothamBold,
        color: colors.main,
        fontSize: '14@s',
      },
      inputText: {
        width: Dimensions.WIDTH * 0.9,
        fontFamily: fonts.GothamBold,
        fontSize: '16@s',
        marginTop: '-10@s',
        paddingBottom: '-10@s',
        borderBottomWidth: '1@s',
      },
});

//make this component available to the app
export default MyComponent;
