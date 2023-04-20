import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

export const EditProfileStyles = StyleSheet.create({
  dropdownStyles: {
    alignSelf: 'center',
    marginTop: 20,
  },
  iconEditStyles: {
    width: 25,
    height: 25,
    position: 'absolute',
    bottom: 0,
    end: 0,
  },
  imgAvatarStyles: {width: 100, height: 100},
  iconBackStyles: {width: 25, height: 15, marginTop: 10},
  containerHeader: {
    height: Dimensions.get('screen').height * 0.06,
    paddingStart: '6%',
    justifyContent: 'center',
  },
  containerAvatar: {
    marginTop: 30,
    alignSelf: 'center',
  },
  textFieldStyles: {alignSelf: 'center', marginTop: 20},
  containerTextHeaderStyles: {
    position: 'absolute',
    top: 0,
    height: Dimensions.get('screen').height * 0.06,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textHeaderStyles: {
    fontSize: 22,
    color: 'black',
  },
  buttonSkipStyles: {
    flex: 1,
    backgroundColor: '#C4F2D5',
    paddingVertical: '4%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '2%',
  },
  buttonContinueStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '2%',
    elevation: 5,
  },
  textSkipStyles: {
    color: Colors.colorPrimary,
  },
  containerSkipContinueStyles: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '5%',
    end: 0,
    start: 0,
    textAlign: 'center',
  },
});
