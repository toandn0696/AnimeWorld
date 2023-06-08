import Video from 'react-native-video';
import React, {useEffect, useRef, useState} from 'react';
import {Image, Pressable, TouchableHighlight, View} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {Drawables} from '../../asset/images';
import {useNavigation} from '@react-navigation/native';
import {RootStackProp} from '../../navigation/TypeNavigtion';
import {WatchingStyles} from './Watching.Styles';

const source =
  'https://tc-033.asuncdn.com/1ab5d45273a9183bebb58eb74d5722d8ea6384f350caf008f08cf018f1f0566d0cb82a2a799830d1af97cd3f4b6a9a81ef3aed2fb783292b1abcf1b8560a1d1aa308008b88420298522a9f761e5aa1024fbe74e5aa853cfc933cd1219327d1232e91847a185021b184c027f97ae732b3708ee6beb80ba5db6628ced43f1196fe/001a653d1086d112c96747afc1774d03/ep.1.1680370490.720.m3u8';

const WatchingScreen = () => {
  //   const [url, setUrl] = useState();
  const videoRef = useRef(null);
  const [isPause, setIsPause] = useState(false);
  const [isShowOption, setIsShowOption] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const navigation = useNavigation<RootStackProp>();

  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  return (
    <View>
      <TouchableHighlight
        style={WatchingStyles.container}
        onPress={() => {
          console.log('tap');
          setIsPause(!isPause);
          setIsShowOption(!isShowOption);
        }}>
        <Video
          paused={isPause}
          source={{uri: source}}
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
            setIsPause(!isPause);
            setIsShowOption(!isShowOption);
          }}>
          <Pressable
            onPress={() => {
              Orientation.lockToPortrait();
              navigation.goBack();
            }}>
            <Image source={Drawables.ic_back} style={WatchingStyles.icBack} />
          </Pressable>
          <Pressable>
            <Image source={isPause ? Drawables.ic_pause : Drawables.ic_play} />
          </Pressable>
        </Pressable>
      )}
    </View>
  );
};

export default WatchingScreen;
