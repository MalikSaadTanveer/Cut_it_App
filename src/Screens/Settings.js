import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import CustomIcons from '../components/CustomIcons';
import Header from '../components/Header';
import colors from '../constants/colors';
import Dimensions from '../constants/Dimensions';
import fonts from '../constants/fonts';
import settingsList from '../constants/settingsList';

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header leftText="Settings" rightText="log out" />


      <FlatList
        data={settingsList}
        renderItem={element => (
          <View key={element.index} style={styles.innerContiner}>
            <Text style={styles.innerTitle}>{element.item.title}</Text>
            {element.item.box.map((item,i) => (
              <TouchableOpacity key={i} style={styles.innerBox}>
                <CustomIcons
                  tag={item.tag}
                  name={item.name}
                  style={styles.icon}
                />
                <Text style={styles.name}>{item.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
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
  innerContiner: {
    width: Dimensions.WIDTH,
    paddingHorizontal: '12@s',
    marginTop: '10@s',
  },
  innerTitle: {
    fontFamily: fonts.GothamMedium_1,
    textTransform: 'uppercase',
    color: colors.white,
    fontSize: '15@s',
    marginBottom: '4@s',
  },
  innerBox: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    paddingVertical: '8@s',
    paddingHorizontal: '8@s',
    borderBottomColor: colors.black,
    borderWidth: 1,
    alignItems: 'center',
  },
  icon: {
    marginRight: '10@s',
    fontSize: '24@s',
    color: colors.main,
  },
  name: {
    fontSize: '14@s',
    fontFamily: fonts.GothamMedium_1,
    color: colors.white,
    textTransform: 'capitalize',
  },
});

export default Settings;
