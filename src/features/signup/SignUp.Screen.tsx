import BaseScreen from '../../components/BaseScreen';
import React, {useState} from 'react';
import CommonTextField from '../../components/CommonTextField';
import {Drawables} from '../../asset/images';
import {SignUpStyles} from './SignUp.Style';
import {Text, View} from 'react-native';
import PrimaryButtonApp from '../../components/PrimaryButton';
import {useNavigation, useTheme} from '@react-navigation/native';
import {RootStackProp} from '../../navigation/TypeNavigtion';
import {useTranslation} from 'react-i18next';
import ButtonLogo from '../../components/ButtonLogo';

const SignUpScreen = () => {
  const [iconEnd, setIconEnd] = useState(Drawables.ic_hide_pw);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const navigation = useNavigation<RootStackProp>();
  const {t} = useTranslation();
  const {colors} = useTheme();

  return (
    <BaseScreen style={SignUpStyles.container}>
      <Text style={SignUpStyles.titleTextStyles}>
        {t('create_your_account')}
      </Text>
      <CommonTextField
        placeHolder={t('email')}
        onTextChange={() => {}}
        isShowIconStart={true}
        iconStart={Drawables.ic_mail}
      />
      <CommonTextField
        placeHolder={t('password')}
        onTextChange={() => {}}
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
        stylesContainer={SignUpStyles.passwordTextFieldStyles}
      />
      <PrimaryButtonApp
        text={t('sign_up')}
        onPress={() => {
          navigation.goBack();
        }}
        containerStyles={SignUpStyles.buttonSignUpStyles}
      />
      <View style={SignUpStyles.containerBreakLine}>
        <View style={SignUpStyles.lineStylesStart} />
        <Text style={[SignUpStyles.textLineStyles, {color: colors.text}]}>
          {t('sign_up_with')}
        </Text>
        <View style={SignUpStyles.lineStylesEnd} />
      </View>
      <View style={SignUpStyles.containerSignUpWith}>
        <ButtonLogo
          icon={Drawables.ic_facebook}
          viewStyles={SignUpStyles.signUpWithFacebookStyles}
          onClick={() => {}}
        />
        <ButtonLogo
          onClick={() => {}}
          icon={Drawables.ic_google}
          viewStyles={SignUpStyles.signUpWithGoogleStyles}
        />
        <ButtonLogo
          icon={Drawables.ic_apple}
          viewStyles={SignUpStyles.signUpWithAppleStyles}
          onClick={() => {}}
        />
      </View>
      <Text style={SignUpStyles.textHaveAccountStyles}>
        {t('already_account')}{' '}
        <Text style={SignUpStyles.textSignUpStyles}>{t('sign_in')}</Text>
      </Text>
    </BaseScreen>
  );
};

export default SignUpScreen;
