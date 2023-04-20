import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

export const HomeStyles = StyleSheet.create({
  containerButtonPlay: {
    borderRadius: 25,
    flexDirection: 'row',
    backgroundColor: Colors.colorPrimary,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  iconPlayStyles: {width: 15, height: 15, alignSelf: 'center'},
  textPlayStyles: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 14,
    marginStart: 7,
  },
});
