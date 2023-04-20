import {ScrollView, View} from 'react-native';
import React from 'react';
import BaseScreen from '../components/BaseScreen';

export const TestScreen = () => {
  return (
    <BaseScreen>
      <View style={{width: '100%', height: 300, backgroundColor: 'red'}}></View>
      <View
        style={{width: '100%', height: 300, backgroundColor: 'blue'}}></View>
      <View
        style={{
          width: '100%',
          backgroundColor: 'yellow',
        }}></View>
      <View
        style={{width: '100%', height: 300, backgroundColor: 'black'}}></View>
      <View
        style={{width: '100%', height: 300, backgroundColor: 'white'}}></View>
      <View
        style={{width: '100%', height: 300, backgroundColor: 'blue'}}></View>
      <View style={{width: '100%', height: 300, backgroundColor: 'red'}}></View>
    </BaseScreen>
  );
};
