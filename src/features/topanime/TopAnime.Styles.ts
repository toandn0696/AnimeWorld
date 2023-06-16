import {Dimensions, StyleSheet} from 'react-native';

export const TopAnimeStyles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  containerHeader: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 28,
    fontWeight: '600',
    marginStart: 20,
    alignItems: 'center',
  },
  icBack: {
    width: 30,
    height: 20,
    marginStart: '5%',
  },
  icSearch: {
    width: 30,
    height: 30,
    position: 'absolute',
    end: '5%',
  },
  containerItemList: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  imageBackground: {
    width: Dimensions.get('screen').width / 2.7,
    height: Dimensions.get('screen').height / 4,
  },
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
  containerInfoImage: {
    flex: 1,
    marginStart: 15,
  },
  textNameAnime: {
    fontSize: 18,
    fontWeight: '600',
  },
  textTypeAnime: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 15,
  },
});
