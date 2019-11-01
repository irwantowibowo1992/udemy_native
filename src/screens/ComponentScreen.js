import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {
  // const salam = 'Assalamualaikum';
  // const arai = ['asdg', 'bbb'];
  // const objek = {color: 'red'};
  // const nama = <Text>Irwanto Wibowo</Text>;
  const myName = 'Irwanto Wibowo';

  return (
    <View>
      {/* <Text style={styles.textStyle}>This is Component Screen</Text>
      <Text>{salam}</Text>
      <Text>{arai}</Text>
      <Text>{objek.color}</Text>
      <Text>{nama}</Text> */}

      <Text style={styles.header}>Getting started with react native!</Text>
      <Text style={styles.subHeader}> My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
  },
  subHeader: {
    fontSize: 20,
  },
});

export default ComponentScreen;
