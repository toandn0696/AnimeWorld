import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type PropSliderItem = {
  text: String;
};

const SliderItem = (prop: PropSliderItem) => {
  const {width, height} = Dimensions.get('screen');
  return (
    <View
      style={{
        width: width,
        height: height,
        ...Styles.container,
      }}>
      <Text style={Styles.textStyles}>{prop.text}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    textAlign: 'center',
  },
});

export default SliderItem;
