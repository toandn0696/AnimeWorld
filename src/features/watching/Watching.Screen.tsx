import Video from 'react-native-video';
import React, {useEffect, useRef, useState} from 'react';
import {Image, Pressable, Text, TouchableHighlight, View} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {Drawables} from '../../asset/images';
import {useNavigation} from '@react-navigation/native';
import {RootStackProp} from '../../navigation/TypeNavigtion';
import {WatchingStyles} from './Watching.Styles';
import Slider from '@react-native-community/slider';
import Colors from '../../theme/Colors';

const source =
  'https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.720.m3u8';

const WatchingScreen = () => {
  const videoRef = useRef<Video>(null);
  const [isPause, setIsPause] = useState(false);
  const [isShowOption, setIsShowOption] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const navigation = useNavigation<RootStackProp>();

  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);


  function getTotalTime(): string {
    let totalTimeShow = totalTime - progress;
    let minutes = Math.floor(totalTimeShow / 60);
    let extraSeconds = Math.round(totalTimeShow % 60);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      extraSeconds < 10 ? `0${extraSeconds}` : extraSeconds
    }`;
  }

  return (
    <View>
      <TouchableHighlight
        style={WatchingStyles.container}
        onPress={() => {
          setIsShowOption(!isShowOption);
        }}>
        <Video
          paused={isPause}
          source={{
            uri: source,
          }}
          ref={videoRef}
          resizeMode="contain"
          fullscreen={true}
          onProgress={data => {
            setProgress(data.currentTime);
          }}
          onLoad={data => {
            setTotalTime(data.duration);
          }}
          style={WatchingStyles.backgroundVideo}
        />
      </TouchableHighlight>
      {isShowOption && (
        <Pressable
          style={WatchingStyles.bgOptionVideo}
          onPress={() => {
            setIsShowOption(!isShowOption);
          }}>
          <Pressable
            onPress={() => {
              Orientation.lockToPortrait();
              navigation.goBack();
            }}>
            <Image source={Drawables.ic_back} style={WatchingStyles.icBack} />
          </Pressable>
          <Pressable
            onPress={() => {
              setIsPause(!isPause);
              setIsShowOption(!isShowOption);
            }}>
            <Image
              style={{
                width: 30,
                height: 30,
                alignSelf: 'center',
              }}
              source={isPause ? Drawables.ic_play : Drawables.ic_pause}
            />
          </Pressable>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginBottom: '2%',
              marginHorizontal: 10,
            }}>
            <Slider
              style={{flex: 2, marginEnd: '1%'}}
              value={progress}
              maximumValue={totalTime}
              onValueChange={value => {
                setProgress(value);
                videoRef.current?.seek(value);
              }}
              thumbTintColor={'white'}
              minimumTrackTintColor={Colors.colorPrimary}
            />
            <Text
              style={{color: 'white', alignSelf: 'center', marginEnd: '5%'}}>
              {getTotalTime()}
            </Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default WatchingScreen;
