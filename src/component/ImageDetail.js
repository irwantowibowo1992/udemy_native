import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetailScreen = ({imageSource, title, score}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 10,
  },
});

export default ImageDetailScreen;
