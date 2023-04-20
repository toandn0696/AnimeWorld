import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

export const SignInStyle = StyleSheet.create({
  TitleStyles: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '700',
  },
  WelcomeStyles: {
    width: '80%',
    height: '20%',
    alignSelf: 'center',
  },
  containerBreakLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  lineStylesStart: {
    flex: 1,
    height: 1,
    marginStart: '10%',
    backgroundColor: Colors.colorBorder,
  },
  lineStylesEnd: {
    flex: 1,
    height: 1,
    marginEnd: '10%',
    backgroundColor: Colors.colorBorder,
  },
  textLineStyles: {
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 15,
    color: Colors.colorTextPrimary,
    fontWeight: '500',
  },
  buttonGoogleStyles: {
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonFacebookStyles: {
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonAppleStyles: {
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonPasswordStyles: {
    marginTop: 30,
    alignSelf: 'center',
    width: Dimensions.get('screen').width / 1.2,
    height: Dimensions.get('screen').height / 15,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNotHaveAccountStyles: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.colorTextPrimary,
    alignSelf: 'center',
  },
  textSignUpStyles: {
    fontSize: 16,
    color: Colors.colorPrimary,
    fontWeight: '600',
  },
});
