import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ColorCounter from '../component/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, changeNumberColor) => {
    switch (color) {
      case 'red':
        red + changeNumberColor > 255 || red + changeNumberColor < 0
          ? null
          : setRed(red + changeNumberColor);
        return;

      case 'green':
        green + changeNumberColor > 255 || green + changeNumberColor < 0
          ? null
          : setGreen(green + changeNumberColor);
        return;

      case 'blue':
        blue + changeNumberColor > 255 || blue + changeNumberColor < 0
          ? null
          : setBlue(blue + changeNumberColor);
        return;
      default:
        return;
    }
  };

  console.log(red);
  console.log(green);
  console.log(blue);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        color="Red"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
