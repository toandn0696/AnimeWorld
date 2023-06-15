import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import Colors from '../theme/Colors';
import {useInterval} from '../data/hook/useInteval';

const ProgressBarMovie = () => {
  let animationFill = useRef(new Animated.Value(0)).current;
  let animationTrans = useRef(new Animated.Value(0)).current;
  const [progress, setProgress] = useState(20);
  const [isPlaying, setPlaying] = useState(false);
  let delay = 1000;

  useInterval(
    () => {
      if (progress < 100) {
        setProgress(prev => prev + 1);
      } else {
        setPlaying(false);
      }
      console.log(width);
    },
    isPlaying ? delay : null,
  );

  useEffect(() => {
    console.log(Dimensions.get('screen').width);
    Animated.timing(animationFill, {
      toValue: progress,
      duration: 100,
      useNativeDriver: false,
    }).start();
    Animated.timing(animationTrans, {
      toValue: Dimensions.get('screen').width * (progress / 100),
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const width = animationFill.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              borderRadius: 15,
              backgroundColor: Colors.colorPrimary,
              width,
            },
          ]}
        />
      </View>
      <Animated.View
        style={[
          {
            borderRadius: 35,
            backgroundColor: 'red',
            width: 30,
            height: 30,
            transform: [{translateX: animationTrans}],
          },
        ]}
      />
    </View>
  );
};

export default ProgressBarMovie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexdirection: 'Column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
  },
});
