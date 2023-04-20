import {Image, Pressable, Text, View} from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {CreatePinStyles} from './CreatePin.Styles';
import {Drawables} from '../../asset/images';
import {useBlurOnFulfill} from '../../components/CodeField/useBlueOnFullfill';
import {useClearByFocusCell} from '../../components/CodeField/useClearByFocusCell';
import {Cursor} from '../../components/CodeField/Cursor';
import {CodeField} from '../../components/CodeField/CodeField';
import {MaskSymbol} from '../../components/CodeField/MaskeSymbol';
import {isLastFilledCell} from '../../components/CodeField/utils';
import PrimaryButtonApp from '../../components/PrimaryButton';
import {useTranslation} from 'react-i18next';

const CELL_COUNT = 4;

const CreatePinScreen = () => {
  const {colors} = useTheme();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandle] = useClearByFocusCell({value, setValue});
  const {t} = useTranslation();

  const renderCell = ({index, symbol, isFocused}: any) => {
    let textChild = null;

    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol="⬤"
          isLastFilledCell={isLastFilledCell({index, value})}>
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Text
        key={index}
        style={[CreatePinStyles.cell, isFocused && CreatePinStyles.focusCell]}
        onLayout={getCellOnLayoutHandle(index)}>
        {textChild}
      </Text>
    );
  };

  function pressContinue() {}

  return (
    <BaseScreen style={{backgroundColor: colors.background}}>
      <Pressable style={CreatePinStyles.containerHeader} onPress={() => {}}>
        <Image
          style={[CreatePinStyles.iconBackStyles, {tintColor: colors.text}]}
          source={Drawables.ic_back}
        />
      </Pressable>
      <View style={CreatePinStyles.containerTextHeaderStyles}>
        <Text style={[CreatePinStyles.textHeaderStyles, {color: colors.text}]}>
          Create New PIN
        </Text>
      </View>
      <Text style={CreatePinStyles.descStyles}>
        Add a PIN number to make your account more secure.
      </Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={CreatePinStyles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
        onBlur={() => {}}
      />
      <PrimaryButtonApp
        text={t('continue')}
        onPress={pressContinue}
        containerStyles={CreatePinStyles.buttonContinueStyles}
      />
    </BaseScreen>
  );
};

export default CreatePinScreen;
