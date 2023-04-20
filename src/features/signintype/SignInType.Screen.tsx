import BaseScreen from '../../components/BaseScreen';
import {Dimensions, Image, Platform, Text, View} from 'react-native';
import React from 'react';
import {Drawables} from '../../asset/images';
import {SignInStyle} from './SignInType.Style';
import ButtonSignInWith from './ButtonSignInWith';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PrimaryButtonApp from '../../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackProp} from '../../navigation/TypeNavigtion';
import {useTranslation} from 'react-i18next';

const SignInTypeScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<RootStackProp>();
  const {t} = useTranslation();

  return (
    <BaseScreen>
      <Image
        style={{
          marginTop:
            Platform.OS === 'ios'
              ? insets.top * 2.2
              : Dimensions.get('screen').height * 0.05,
          ...SignInStyle.WelcomeStyles,
        }}
        source={Drawables.ic_welcome}
      />
      <Text style={SignInStyle.TitleStyles}>{t('let_you_in')}</Text>
      <ButtonSignInWith
        text={t('continue_with_facebook')}
        icon={Drawables.ic_facebook}
        containerStyles={SignInStyle.buttonFacebookStyles}
      />
      <ButtonSignInWith
        text={t('continue_with_google')}
        icon={Drawables.ic_google}
        containerStyles={SignInStyle.buttonGoogleStyles}
      />
      <ButtonSignInWith
        text={t('continue_with_apple')}
        icon={Drawables.ic_apple}
        containerStyles={SignInStyle.buttonAppleStyles}
      />
      <View style={SignInStyle.containerBreakLine}>
        <View style={SignInStyle.lineStylesStart} />
        <Text style={SignInStyle.textLineStyles}>{t('or')}</Text>
        <View style={SignInStyle.lineStylesEnd} />
      </View>
      <PrimaryButtonApp
        text={t('sign_in_with_password')}
        onPress={() => {
          navigation.navigate('SignIn');
        }}
        containerStyles={SignInStyle.buttonPasswordStyles}
      />
      <Text style={SignInStyle.textNotHaveAccountStyles}>
        {t('not_have_account')}
        <Text
          style={SignInStyle.textSignUpStyles}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          {' '}
          {t('sign_up')}
        </Text>
      </Text>
    </BaseScreen>
  );
};

export default SignInTypeScreen;
