import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

export const SignUpStyles = StyleSheet.create({
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
  buttonSignUpStyles: {
    marginTop: 30,
    width: Dimensions.get('screen').width / 1.2,
    height: Dimensions.get('screen').height / 15,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBreakLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineStylesStart: {
    flex: 1,
    height: 1,
    marginStart: '5%',
    backgroundColor: Colors.colorBorder,
  },
  lineStylesEnd: {
    flex: 1,
    height: 1,
    marginEnd: '5%',
    backgroundColor: Colors.colorBorder,
  },
  textLineStyles: {
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 15,
    fontWeight: '500',
  },
  containerSignUpWith: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpWithFacebookStyles: {
    marginStart: '10%',
  },
  signUpWithGoogleStyles: {
    marginHorizontal: '5%',
  },
  signUpWithAppleStyles: {
    marginEnd: '10%',
  },
  textHaveAccountStyles: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.colorTextPrimary,
    alignSelf: 'center',
    marginTop: 30,
  },
  textSignUpStyles: {
    fontSize: 16,
    color: Colors.colorPrimary,
    fontWeight: '600',
  },
});
