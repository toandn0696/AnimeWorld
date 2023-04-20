import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

export const SignInStyles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  passwordTextFieldStyles: {
    marginTop: 20,
  },
  titleTextStyles: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: '10%',
  },
  iconCheckboxStyles: {
    width: 30,
    height: 30,
    tintColor: Colors.colorPrimary,
    marginEnd: 10,
  },
  containerCheckBoxStyles: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  textRememberStyles: {
    fontSize: 16,
    fontWeight: '400',
  },
  buttonSignInStyles: {
    marginTop: 30,
    width: Dimensions.get('screen').width / 1.2,
    height: Dimensions.get('screen').height / 15,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPassStyles: {
    marginTop: 20,
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
  buttonPasswordStyles: {
    marginTop: 30,
    alignSelf: 'center',
  },
  textNotHaveAccountStyles: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.colorTextPrimary,
    alignSelf: 'center',
  },
  textSignUpStyles: {
    fontSize: 16,
    fontWeight: '600',
  },
  containerSignInWith: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signInWithFacebookStyles: {
    marginStart: '10%',
  },
  signInWithGoogleStyles: {
    marginHorizontal: '5%',
  },
  signInWithAppleStyles: {
    marginEnd: '10%',
  },
});
