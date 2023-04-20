import {Dimensions, StyleSheet} from 'react-native';

export const WelcomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotStyle: {
    width: 10,
    height: 10,
    backgroundColor: '#347af0',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  containerDotStyle: {bottom: 150, position: 'absolute'},
  containerButton: {
    width: Dimensions.get('screen').width / 1.2,
    height: Dimensions.get('screen').height / 15,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
