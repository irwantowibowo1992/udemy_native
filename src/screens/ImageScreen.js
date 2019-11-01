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
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
