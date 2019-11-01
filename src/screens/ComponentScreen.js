import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {
  const salam = 'Assalamualaikum';
  const arai = ['asdg', 'bbb'];
  const objek = {color: 'red'};
  const nama = <Text>Irwanto Wibowo</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>This is Component Screen</Text>
      <Text>{salam}</Text>
      <Text>{arai}</Text>
      <Text>{objek.color}</Text>
      <Text>{nama}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
