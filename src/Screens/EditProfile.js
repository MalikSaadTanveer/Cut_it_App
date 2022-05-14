import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Keyboard,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '../components/Header';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import fonts from '../constants/fonts';

const EditProfile = ({navigation}) => {
  useEffect(() => {
    const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
      Keyboard.dismiss();
    });
    return () => {
      keyboardHide.remove();
    };
  }, []);
  const [borders, setBorders] = useState({
    Name: false,
    Email: false,
    Phone: false,
  });

  const [placeholder, setPlaceholder] = useState({
    Name: 'Name',
    Email: 'Email',
    Phone: 'Cell Phone',
  });

  const [data, setData] = useState({
    Name: 'Malik Saad',
    Email: 'sample@maniwebify.com',
    Phone: '+123456789',
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
  const handleBlur = name => {
    setBorders(pre => ({
      ...pre,
      [name]: false,
    }));
    setPlaceholder(pre => ({
      ...pre,
      [name]: name,
    }));
  };

  const handleData = (name, value) => {
    setData(pre => ({...pre, [name]: value}));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftText="Edit Profile"
        rightText="Save"
        backIcon
        onPress={() => navigation.goBack()}
      />

      <View style={styles.innerContainer}>
        <View style={styles.editImageContainer}>
          <Image
            source={require('../../assets/images/dashboard1.jpg')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Edit Profile Picture</Text>
        </View>

        <View style={styles.textContainers}>
          <Text style={styles.focusedText}>Name</Text>
          <TextInput
            placeholder={placeholder.Name}
            placeholderTextColor={colors.lightGrey}
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
        <View style={styles.textContainers}>
          <Text style={styles.focusedText}>Cell Phone</Text>
          <TextInput
            placeholder={placeholder.Phone}
            placeholderTextColor={colors.lightGrey}
            style={[
              styles.inputText,
              {borderBottomColor: borders.Phone ? colors.main : 'transparent'},
            ]}
            onFocus={() => handleFocus('Phone')}
            onBlur={() => handleBlur('Phone')}
            selectionColor={colors.main}
            value={data.Phone}
            onChangeText={text => handleData('Phone', text)}
          />
        </View>
        <View style={styles.textContainers}>
          <Text style={styles.focusedText}>Email</Text>
          <TextInput
            placeholder={placeholder.Email}
            placeholderTextColor={colors.lightGrey}
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
      </View>
    </SafeAreaView>
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
  editImageContainer: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '20@s',
  },
  image: {
    width: '80@s',
    height: '80@s',
    marginBottom: '10@s',
    borderRadius: '40@s',
  },
  imageText: {
    fontFamily: fonts.GothamBold,
    color: colors.white,
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
    color:'white'
  },
  
});

export default EditProfile;
