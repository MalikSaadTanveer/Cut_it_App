import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Routes from './src/Navigation/Routes';

const App = () => {
  return (
    <View style={styles.container}>
      <Routes/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  text:{
    color:'white',
    fontSize:40,
  }
});

export default App;
