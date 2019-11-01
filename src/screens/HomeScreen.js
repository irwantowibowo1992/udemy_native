import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={() => console.log('Button Pressed')}
        title="Go To List"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
