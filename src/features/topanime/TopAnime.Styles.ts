import {Dimensions, StyleSheet} from 'react-native/types';

export const TopAnimeStyles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  containerHeader: {
    flexDirection: 'row',
  },
  textHeader: {
    fontSize: 28,
    fontWeight: '600',
    marginStart: 20,
  },
  icBack: {
    width: 20,
    height: 20,
  },
  icSearch: {
    width: 20,
    height: 20,
    position: 'absolute',
    end: '0',
  },
  containerItemList: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  imageBackground: {flex: 1, height: Dimensions.get('screen').height / 4},
  contentImageBackground: {borderRadius: 15},
  shadowImageBackground: {
    borderRadius: 15,
    height: Dimensions.get('screen').height / 4,
    width: Dimensions.get('screen').width / 2.7,
    position: 'absolute',
  },
  textTopAnime: {
    fontSize: 36,
    fontWeight: '500',
    color: 'white',
    position: 'absolute',
    bottom: '2%',
    start: '5%',
  },
  containerInfoImage: {flex: 2},
  textNameAnime: {
    fontSize: 18,
    fontWeight: '600',
  },
  textTypeAnime: {
    fontSize: 14,
    fontWeight: '400',
  },
});
