import BaseScreen from '../../components/BaseScreen';
import React, {useEffect, useState} from 'react';
import CommonTextField from '../../components/CommonTextField';
import {Drawables} from '../../asset/images';
import {SignInStyles} from './SignIn.Style';
import {Dimensions, Image, Platform, Pressable, Text, View} from 'react-native';
import PrimaryButtonApp from '../../components/PrimaryButton';
import {useNavigation, useTheme} from '@react-navigation/native';
// import {RootStackProp} from '../../navigation/TypeNavigtion';
import {useTranslation} from 'react-i18next';
import ButtonLogo from '../../components/ButtonLogo';
import {RootStackProp} from '../../navigation/TypeNavigtion';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import useSignIn from './useSignIn';

const SignInScreen = () => {
  const [iconEnd, setIconEnd] = useState(Drawables.ic_hide_pw);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const {colors} = useTheme();
  const navigation = useNavigation<RootStackProp>();
  const insets = useSafeAreaInsets();

  // const navigation = useNavigation<RootStackProp>();
  const {t} = useTranslation();
  // const {loginWithIDPW, onAppleButtonPress, onAppleButtonPressForAndroid} =
  //   useSignIn();

  useEffect(() => {
    email.length !== 0 && pass.length !== 0
      ? setIsDisable(false)
      : setIsDisable(true);
  }, [email, pass]);

  return (
    <BaseScreen
      style={{
        marginTop:
          Platform.OS === 'ios'
            ? insets.top * 1.2
            : Dimensions.get('screen').height * 0.05,
        ...SignInStyles.container,
      }}>
      <Text style={SignInStyles.titleTextStyles}>
        {t('create_your_account')}
      </Text>
      <CommonTextField
        placeHolder={t('email')}
        onTextChange={(textEmail: string) => {
          setEmail(textEmail);
        }}
        typeInput="email-address"
        isShowIconStart={true}
        iconStart={Drawables.ic_mail}
      />
      <CommonTextField
        placeHolder={t('password')}
        onTextChange={(password: string) => {
          setPass(password);
        }}
        isShowIconStart={true}
        iconStart={Drawables.ic_password}
        isShowIconEnd={true}
        iconEnd={iconEnd}
        onPressInIconEnd={() => {
          setIconEnd(Drawables.ic_show_pw);
          setIsHidePassword(false);
        }}
        onPressOutIconEnd={() => {
          setIconEnd(Drawables.ic_hide_pw);
          setIsHidePassword(true);
        }}
        isTypPassword={isHidePassword}
        stylesContainer={SignInStyles.passwordTextFieldStyles}
      />
      <Pressable
        style={SignInStyles.containerCheckBoxStyles}
        onPress={() => {
          setIsChecked(!isChecked);
        }}>
        <Image
          style={SignInStyles.iconCheckboxStyles}
          source={isChecked ? Drawables.ic_checked : Drawables.ic_unchecked}
        />
        <Text style={SignInStyles.textRememberStyles}>{t('remember_me')}</Text>
      </Pressable>
      <PrimaryButtonApp
        text={t('sign_in')}
        containerStyles={SignInStyles.buttonSignInStyles}
        isDisable={isDisable}
        onPress={() => {
          if (email !== '' && pass !== '') {
            navigation.navigate('Main');
          }
          // loginWithIDPW(email, pass);
        }}
      />
      <Text style={[SignInStyles.forgotPassStyles, {color: colors.primary}]}>
        {t('forgot_pass')}
      </Text>
      <View style={SignInStyles.containerBreakLine}>
        <View style={SignInStyles.lineStylesStart} />
        <Text style={[SignInStyles.textLineStyles, {color: colors.text}]}>
          {t('continue_with')}
        </Text>
        <View style={SignInStyles.lineStylesEnd} />
      </View>
      <View style={SignInStyles.containerSignInWith}>
        <ButtonLogo
          icon={Drawables.ic_facebook}
          viewStyles={SignInStyles.signInWithFacebookStyles}
          onClick={() => {}}
        />
        <ButtonLogo
          onClick={() => {}}
          icon={Drawables.ic_google}
          viewStyles={SignInStyles.signInWithGoogleStyles}
        />
        <ButtonLogo
          icon={Drawables.ic_apple}
          viewStyles={SignInStyles.signInWithAppleStyles}
          onClick={() => {
            if (Platform.OS === 'android') {
              // onAppleButtonPressForAndroid();
            } else {
              // onAppleButtonPress();
            }
          }}
        />
      </View>
      <Text style={SignInStyles.textNotHaveAccountStyles}>
        {t('not_have_account')}{' '}
        <Text style={[SignInStyles.textSignUpStyles, {color: colors.primary}]}>
          {t('sign_up')}
        </Text>
      </Text>
    </BaseScreen>
  );
};

export default SignInScreen;
