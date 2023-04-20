import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

export const ChooseInterestStyles = StyleSheet.create({
  textHeaderStyles: {
    width: '100%',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 20,
  },
  textDescriptionStyles: {
    marginHorizontal: '3%',
    marginTop: 20,
    fontSize: 16,
  },
  containerInterest: {
    marginTop: 20,
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
  },
  textSkipStyles: {
    color: Colors.colorPrimary,
  },
  containerSkipContinueStyles: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '5%',
  },
});
