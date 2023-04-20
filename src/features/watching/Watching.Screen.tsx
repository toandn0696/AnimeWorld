import Video from 'react-native-video';
import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import BaseScreen from '../../components/BaseScreen';
import {StyleSheet} from 'react-native';

const urlAPI =
  'https://api.consumet.org/anime/gogoanime/watch/spy-x-family-episode-1';

const source =
  'https://tc-033.asuncdn.com/1ab5d45273a9183bebb58eb74d5722d8ea6384f350caf008f08cf018f1f0566d0cb82a2a799830d1af97cd3f4b6a9a81ef3aed2fb783292b1abcf1b8560a1d1aa308008b88420298522a9f761e5aa1024fbe74e5aa853cfc933cd1219327d1232e91847a185021b184c027f97ae732b3708ee6beb80ba5db6628ced43f1196fe/001a653d1086d112c96747afc1774d03/ep.1.1680370490.720.m3u8';

const WatchingScreen = () => {
  //   const [url, setUrl] = useState();
  const videoRef = useRef(null);

  //   useEffect(() => {
  //     axios
  //       .get(urlAPI)
  //       .then(function (response) {
  //         console.log(url);
  //         setUrl(response.data.sources[0].url);
  //       })
  //       .catch(function (err) {
  //         console.log(err);
  //       });
  //   }, []);

  return (
    <Video
      source={{uri: source}}
      ref={videoRef}
      onMagicTap={() => {
        console.log('tapp');
      }}
      onAccessibilityTap={() => {
        console.log('tapppp');
      }}
      style={styles.backgroundVideo}
    />
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default WatchingScreen;
