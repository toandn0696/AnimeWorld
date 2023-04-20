import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import Colors from '../theme/Colors';

type PropButton = {
  text: String | any;
  radius?: number;
  containerStyles?: ViewStyle;
  onPress(): void;
  isDisable?: boolean;
  textStyles?: TextStyle;
};

const PrimaryButtonApp = ({
  text,
  radius,
  containerStyles,
  onPress,
  isDisable: isDisable,
  textStyles,
}: PropButton) => {
  const defaultProps = {
    radius: radius || 25,
    isDisable: isDisable === undefined ? false : isDisable,
  };
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={{
        borderRadius: defaultProps.radius,
        backgroundColor: defaultProps.isDisable
          ? Colors.colorDisableButton
          : colors.primary,
        ...containerStyles,
      }}
      disabled={defaultProps.isDisable}
      onPress={onPress}>
      <Text style={[Styles.buttonTextStyles, {...textStyles}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  buttonTextStyles: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
});

export default PrimaryButtonApp;
