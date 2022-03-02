import React, {useState,useEffect} from 'react';
import {View, Text, TextInput,Keyboard} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Header from '../components/Header';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import Dimensions from '../constants/Dimensions';

const FeedbackAndSupport = ({navigation,route}) => {
    const navigationData = route.params
    useEffect(() => {
        const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
          Keyboard.dismiss();
        });
        return () => {
          keyboardHide.remove();
        };
      }, []);
      const [borders, setBorders] = useState({
        Email: false,
        Feedback:false,
      });
    
      const [placeholder, setPlaceholder] = useState({
        Email: 'Email',
        Feedback:navigationData.placeholder
      });
    
      const [data, setData] = useState({
        Email: 'sample@maniwebify.com',
        Feedback:''
      });
      const handleFocus = name => {
        setBorders(pre => ({
          ...pre,
          [name]: true,
        }));
        setPlaceholder(pre => ({
          ...pre,
          [name]: '',
        }));
      };
      const handleBlur = (name, value)=> {
        setBorders(pre => ({
          ...pre,
          [name]: false,
        }));
        setPlaceholder(pre => ({
          ...pre,
          [name]: value,
        }));
      };
    
      const handleData = (name, value) => {
        setData(pre => ({...pre, [name]: value}));
      };
  return (
    <View style={styles.container}>
      <Header
        leftText={navigationData.header}
        rightText="Send"
        backIcon
        onPress={() => navigation.goBack()}
      />
      <View style={styles.innerContainer}>
        <View style={styles.description}>
            <Text>You can send us your {navigationData.header=='feedback'? navigationData.header : navigationData.header + ' request'} here, or email us directly at <Text style={styles.companyEmail}>{navigationData.email}.</Text></Text>
        </View>

        <View style={styles.textContainers}>
          {(borders.Email || data.Email.length>0) && <Text style={styles.focusedText}>Email</Text>}
          <TextInput
            placeholder={placeholder.Email}
            style={[
              styles.inputText,
              {borderBottomColor: borders.Email ? colors.main : 'transparent'},
            ]}
            onFocus={() => handleFocus('Email')}
            onBlur={() => handleBlur('Email')}
            selectionColor={colors.main}
            value={data.Email}
            onChangeText={text => handleData('Email', text)}
          />
        </View>
        <View style={styles.textContainers}>
        {(borders.Feedback || data.Feedback.length>0) && <Text style={styles.focusedText}>Feedback</Text>}
          <TextInput
            placeholder={placeholder.Feedback}
            style={[
              styles.inputText,
              {borderBottomColor: borders.Feedback ? colors.main : 'transparent'},
            ]}
            onFocus={() => handleFocus('Feedback')}
            onBlur={() => handleBlur('Feedback',navigationData.placeholder)}
            selectionColor={colors.main}
            value={data.Feedback}
            onChangeText={text => handleData('Feedback', text)}
            multiline={true}
            numberOfLines={4}
            textAlignVertical='top'
          />
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background,
      },
      innerContainer: {
        width: Dimensions.WIDTH,
        padding: '12@s',
      },
      description:{
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '10@s',
      },
      companyEmail:{
          color:colors.main,
          textDecorationLine: 'underline',   
      },
      textContainers: {
        backgroundColor: colors.secondary,
        marginTop: '2@s',
        padding: '4@s',
        // height: '52@s',
        justifyContent: 'flex-end',
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

export default FeedbackAndSupport;
