import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

export const DetailAnimeStyles = StyleSheet.create({
  containerCover: {
    width: '100%',
    aspectRatio: 1.2,
  },
  shadowCover: {width: '100%', aspectRatio: 1.2, position: 'absolute'},
  containerButtonsBottomCover: {
    flexDirection: 'row',
    marginTop: '3%',
    marginHorizontal: '5%',
  },
  containerButtonPlay: {
    flex: 1,
    borderRadius: 25,
    flexDirection: 'row',
    backgroundColor: Colors.colorPrimary,
    paddingVertical: 7,
    justifyContent: 'center',
    marginEnd: 5,
  },
  iconPlayStyles: {width: 15, height: 15, alignSelf: 'center'},
  textPlayStyles: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 16,
    marginStart: 7,
    paddingVertical: 3,
    fontWeight: '600',
  },
  containerButtonAddMyList: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    borderColor: Colors.colorPrimary,
    borderWidth: 2,
    marginStart: 5,
  },
  iconButtonDownloadStyles: {width: 15, height: 15, alignSelf: 'center'},
  textButtonDownloadStyles: {
    color: Colors.colorPrimary,
    alignSelf: 'center',
    fontSize: 16,
    marginStart: 7,
    fontWeight: '600',
  },
  containerIconBack: {
    marginStart: '5%',
  },
  icBack: {
    width: 30,
    height: 20,
    tintColor: 'white',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '600',
    flex: 2,
  },
  containerInfo: {
    marginTop: '4%',
    marginHorizontal: '5%',
    flexDirection: 'row',
  },
  containerMyList: {
    marginStart: '15%',
    marginEnd: '7%',
  },
  icMylist: {
    height: 20,
    width: 20,
  },
  icShare: {
    height: 20,
    width: 20,
  },
  icRating: {
    height: 18,
    width: 18,
    alignSelf: 'center',
  },
  icArrowRight: {
    height: 18,
    width: 18,
    alignSelf: 'center',
  },
  containerRating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textRating: {
    alignSelf: 'center',
    marginHorizontal: 10,
    color: Colors.colorPrimary,
    fontSize: 14,
  },
  textReleaseDate: {
    fontSize: 14,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  textTypeAnime: {
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: Colors.colorPrimary,
    color: Colors.colorPrimary,
    fontSize: 12,
    padding: 5,
    marginEnd: 10,
  },
  textGenres: {
    fontSize: 14,
    marginHorizontal: '5%',
    marginTop: 10,
  },
  textDescription: {
    fontSize: 12,
    marginHorizontal: '5%',
    marginTop: 10,
  },
});
