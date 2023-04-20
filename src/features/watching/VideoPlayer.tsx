import {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import React = require('react');
import Video from 'react-native-video';
import VideoControl from './VideoControl';

type TypeVideoPlayer = {
  height: number;
  width: number;
  videoUri: any;
  outOfBoundItems: any;
  item: any;
};

const VideoPlayer = ({
  height,
  width,
  videoUri,
  outOfBoundItems,
  item,
}: TypeVideoPlayer) => {
  const playbackInstance = useRef(null);
  const [playbackInstanceInfo, setPlaybackInstanceInfo] = useState({
    position: 0,
    duration: 0,
    state: 'Buffering',
  });
  useEffect(() => {
    return () => {
      if (playbackInstance.current) {
        playbackInstance.current.setStatusAsync({
          shouldPlay: false,
        });
      }
    };
  }, []);

  useEffect(() => {
    playbackInstance.current.pauseAsync();
  }, [outOfBoundItems]);

  async function togglePlay() {
    const shouldPlay = playbackInstanceInfo.state !== 'Playing';
    if (playbackInstance.current !== null) {
      await playbackInstance.current.setStatusAsync({
        shouldPlay,
        ...(playbackInstanceInfo.state === 'Ended' && {positionMillis: 0}),
      });
      setPlaybackInstanceInfo({
        ...playbackInstanceInfo,
        state: playbackInstanceInfo.state === 'Playing' ? 'Paused' : 'Playing',
      });
    }
  }

  function updatePlaybackCallBack(status: any) {
    if (status.isLoaded) {
      setPlaybackInstanceInfo({
        ...playbackInstanceInfo,
        position: status.positionMillis,
        duration: status.positionMillis || 0,
        state: status.didJustFinish
          ? 'Ended'
          : status.isBuffering
          ? 'Buffering'
          : status.shouldPlay
          ? 'Playing'
          : 'Paused',
      });
    } else {
      if (status.isLoaded === false && status.error) {
        const error = `Error ${status.error}`;
        console.log(error, 'error');
      }
    }
  }

  return (
    <View style={{flex: 1, marginBottom: 20}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={{height: 30, width: 30, borderRadius: 30}} />
          <Text
            style={{
              marginLeft: 10,
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {item.name}
          </Text>
        </View>
        <View>
          <Image />
        </View>
      </View>
      <Video
        ref={playbackInstance}
        style={styles.video(width, height)}
        source={{uri: videoUri}}
        resizeMode="cover"
        onBuffer={updatePlaybackCallBack}
      />
      <View style={styles.controlsContainer}>
        <VideoControl
          state={playbackInstanceInfo.state}
          playbackInstance={playbackInstance.current}
          playbackInstanceInfo={playbackInstanceInfo}
          setPlayBackInstanceInfo={setPlaybackInstanceInfo}
          togglePlay={togglePlay}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create<any>({
  video: (width: number, height: number) => ({
    alignSelf: 'center',
    width: width,
    height: height,
  }),
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 10,
  },
});

export default VideoPlayer;
