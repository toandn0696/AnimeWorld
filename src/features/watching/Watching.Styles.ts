import {StyleSheet} from 'react-native';

export const WatchingStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    elevation: 1,
    backgroundColor: 'black',
  },
  bgOptionVideo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#00000080',
  },
  icBack: {
    height: 20,
    width: 30,
    marginStart: '10%',
    marginTop: '5%',
    tintColor: 'white',
  },
  icPlay: {
    height: 30,
    width: 30,
  },
});
