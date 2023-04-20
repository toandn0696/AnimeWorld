import {Image, Pressable, Text, View} from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import {Drawables} from '../../asset/images';
import React, {useState} from 'react';
import CommonTextField from '../../components/CommonTextField';
import DropDown from '../../components/Dropdown';
import {EditProfileStyles} from './EditProfile.Styles';
import {useTheme} from '@react-navigation/native';
import PrimaryButtonApp from '../../components/PrimaryButton';
import {useTranslation} from 'react-i18next';

const EditProfileScreen = () => {
  const [fullName, setFullName] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selected, setSelected] = useState<any>(undefined);
  const {colors} = useTheme();
  const {t} = useTranslation();

  const dataDropDown = [
    {label: 'Male', value: '0'},
    {label: 'Female', value: '1'},
  ];

  function pressSkip() {}

  function pressContinue() {}

  return (
    <BaseScreen>
      <Pressable style={EditProfileStyles.containerHeader} onPress={() => {}}>
        <Image
          style={[EditProfileStyles.iconBackStyles, {tintColor: colors.text}]}
          source={Drawables.ic_back}
        />
      </Pressable>
      <View style={EditProfileStyles.containerTextHeaderStyles}>
        <Text
          style={[EditProfileStyles.textHeaderStyles, {color: colors.text}]}>
          Edit Your Profile
        </Text>
      </View>
      <Pressable style={EditProfileStyles.containerAvatar}>
        <Image
          style={EditProfileStyles.imgAvatarStyles}
          source={Drawables.ic_default_avt}
        />
        <Image
          style={EditProfileStyles.iconEditStyles}
          source={Drawables.ic_edit}
        />
      </Pressable>
      <CommonTextField
        stylesContainer={EditProfileStyles.textFieldStyles}
        placeHolder={'Full name'}
        onTextChange={(input: string) => {
          setFullName(input);
        }}
      />
      <CommonTextField
        stylesContainer={EditProfileStyles.textFieldStyles}
        placeHolder={'NickName'}
        onTextChange={(input: string) => {
          setNickName(input);
        }}
      />
      <CommonTextField
        stylesContainer={EditProfileStyles.textFieldStyles}
        placeHolder={'Email'}
        onTextChange={(input: string) => {
          setEmail(input);
        }}
        typeInput="email-address"
        isShowIconEnd={true}
        iconEnd={Drawables.ic_mail}
      />
      <CommonTextField
        stylesContainer={EditProfileStyles.textFieldStyles}
        placeHolder={'Phone Number'}
        onTextChange={setPhoneNumber}
        typeInput="phone-pad"
      />
      <DropDown
        containerStyles={EditProfileStyles.dropdownStyles}
        PlaceHolder={'Gender'}
        data={dataDropDown}
        onSelect={setSelected}
      />
      <View style={EditProfileStyles.containerSkipContinueStyles}>
        <PrimaryButtonApp
          text={t('skip')}
          onPress={pressSkip}
          containerStyles={EditProfileStyles.buttonSkipStyles}
          textStyles={EditProfileStyles.textSkipStyles}
        />
        <PrimaryButtonApp
          text={t('continue')}
          onPress={pressContinue}
          containerStyles={EditProfileStyles.buttonContinueStyles}
        />
      </View>
    </BaseScreen>
  );
};

export default EditProfileScreen;
