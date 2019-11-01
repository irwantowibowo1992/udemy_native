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
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/forest.jpg')}
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
