import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = props => {
  console.log(props.navigation);

  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Go To Component"
      />

      <TouchableOpacity onPress={() => console.log('List Item Pressed')}>
        <Text>Go To List Component</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
