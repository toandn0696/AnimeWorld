import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

export const CELL_SIZE = 70;
export const CELL_BORDER_RADIUS = 15;

export const CreatePinStyles = StyleSheet.create({
  containerHeader: {
    height: Dimensions.get('screen').height * 0.06,
    paddingStart: '6%',
    justifyContent: 'center',
  },
  iconBackStyles: {width: 25, height: 15, marginTop: 10},
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
  descStyles: {
    marginHorizontal: '8%',
    textAlign: 'center',
    fontSize: 16,
    marginTop: '20%',
  },
  //Styles for code field
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    fontSize: 32,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: 'black',
    overflow: 'hidden',
    backgroundColor: Colors.colorBgBlurtextInput,
    marginTop: '10%',
    borderWidth: 1,
    borderColor: Colors.colorBorder,
  },
  focusCell: {
    borderColor: Colors.colorPrimary,
    backgroundColor: Colors.colorBgFocusTextInput,
  },
  buttonContinueStyles: {
    width: Dimensions.get('screen').width / 1.2,
    height: Dimensions.get('screen').height / 15,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: '8%',
    bottom: '8%',

    // IOS
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,

    // Android
    elevation: 5,
  },
});
