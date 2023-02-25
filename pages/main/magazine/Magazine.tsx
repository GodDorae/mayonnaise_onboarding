import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Magazine = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Magazine!</Text>
    </View>
  );
};

export default Magazine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
