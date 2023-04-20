import {Text, View} from 'react-native';
import React, {useState} from 'react';
import FlowLayout from '../../components/flowlayout/FlowView';
import Styles from '../../theme/Styles';
import {useTranslation} from 'react-i18next';
import {ChooseInterestStyles} from './ChooseInterest.Style';
import {useTheme} from '@react-navigation/native';
import PrimaryButtonApp from '../../components/PrimaryButton';

let listData = [
  {name: 'Action', isSelected: false},
  {name: 'Drama', isSelected: false},
  {name: 'Comedy', isSelected: false},
  {name: 'Ecchi', isSelected: false},
  {name: 'Adventure', isSelected: false},
  {name: 'Mecha', isSelected: false},
  {name: 'Romance', isSelected: false},
  {name: 'Science', isSelected: false},
  {name: 'Music', isSelected: false},
  {name: 'School', isSelected: false},
  {name: 'Seinen', isSelected: false},
  {name: 'Shoujo', isSelected: false},
  {name: 'Fantasy', isSelected: false},
  {name: 'Mystery', isSelected: false},
  {name: 'Vampire', isSelected: false},
  {name: 'Isekai', isSelected: false},
  {name: 'Shounen', isSelected: false},
  {name: 'Television', isSelected: false},
  {name: 'Superheroes', isSelected: false},
  {name: 'Magic', isSelected: false},
  {name: 'Game', isSelected: false},
  {name: 'Slice of Life', isSelected: false},
];

const ChooseInterestScreen = () => {
  const [value, setValue] = useState(listData);
  const {t} = useTranslation();
  const {colors} = useTheme();

  function updateListData(newData: {name: string; isSelected: boolean}) {
    setValue(
      value.map(oldData => {
        if (oldData.name === newData.name) {
          return newData;
        } else {
          return oldData;
        }
      }),
    );
  }

  function pressSkip() {}

  function pressContinue() {}

  return (
    <View style={[Styles.container, {backgroundColor: colors.background}]}>
      <Text
        style={[ChooseInterestStyles.textHeaderStyles, {color: colors.text}]}>
        {t('choose_your_interest')}
      </Text>
      <Text
        style={[
          ChooseInterestStyles.textDescriptionStyles,
          {color: colors.text},
        ]}>
        {t('desctiption_interest')}
      </Text>
      <FlowLayout
        stylesContainer={ChooseInterestStyles.containerInterest}
        values={value}
        setSelectedValue={(data: {name: string; isSelected: boolean}) => {
          data.isSelected = !data.isSelected;
          updateListData(data);
        }}
      />
      <View style={ChooseInterestStyles.containerSkipContinueStyles}>
        <PrimaryButtonApp
          text={t('skip')}
          onPress={pressSkip}
          containerStyles={ChooseInterestStyles.buttonSkipStyles}
          textStyles={ChooseInterestStyles.textSkipStyles}
        />
        <PrimaryButtonApp
          text={t('continue')}
          onPress={pressContinue}
          containerStyles={ChooseInterestStyles.buttonContinueStyles}
        />
      </View>
    </View>
  );
};

export default ChooseInterestScreen;
