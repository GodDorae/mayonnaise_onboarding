import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const My = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My!</Text>
    </View>
  );
};

export default My;

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
