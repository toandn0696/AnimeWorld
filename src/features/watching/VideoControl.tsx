import {ActivityIndicator, Pressable, StyleSheet, View} from 'react-native';
import React = require('react');
import Slider from '@react-native-community/slider';

type PropsVideoControl = {
  state: String;
  togglePlay: () => void;
  playbackInstanceInfo: any;
  setPlayBackInstanceInfo: any;
  playbackInstance: any;
};
const VideoControl = ({
  state,
  togglePlay,
  playbackInstanceInfo,
  setPlayBackInstanceInfo,
  playbackInstance,
}: PropsVideoControl) => {
  function renderIcon() {
    switch (state) {
      case 'Buffering': {
        return <ActivityIndicator size={20} color="white" />;
      }
      case 'Playing': {
        return <ActivityIndicator size={20} color="white" />;
      }
      case 'Paused': {
        return <ActivityIndicator size={20} color="white" />;
      }
      case 'Ended': {
        return <ActivityIndicator size={20} color="white" />;
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Pressable
          style={styles.iconWrapper}
          onPress={state === 'Buffering' ? null : togglePlay}>
          {renderIcon()}
        </Pressable>
        <Slider
          style={styles.slider}
          thumbTintColor="#fff"
          minimumTrackTintColor="red"
          maximumTrackTintColor="#8E9092"
          value={
            playbackInstanceInfo.duration
              ? playbackInstanceInfo.position / playbackInstanceInfo.duration
              : 0
          }
          onSlidingStart={() => {
            if (playbackInstanceInfo.state === 'Playing') {
              togglePlay();
              setPlayBackInstanceInfo({
                ...playbackInstanceInfo,
                state: 'Pause',
              });
            }
          }}
          onSlidingComplete={async e => {
            const position = e * playbackInstanceInfo.duration;
            if (playbackInstance) {
              await playbackInstance.setStatusAsync({
                positionMillis: position,
                shouldPlay: true,
              });
            }
            setPlayBackInstanceInfo({...playbackInstanceInfo, position});
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingRight: 20,
    width: '100%',
    height: 66,
  },
  iconWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  slider: {
    flex: 1,
    marginHorizontal: 20,
  },
});

export default VideoControl;
