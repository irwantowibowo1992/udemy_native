import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import ImageDetail from '../component/ImageDetail';

const ImageScreen = ({navigation}) => {
  return (
    <View>
      <ImageDetail title="Forest" />
      <ImageDetail title="Mountain" />
      <ImageDetail title="Flowers" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
