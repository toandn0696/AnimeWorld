import {Image, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import Colors from '../theme/Colors';
import React from 'react';

type Props = {
  icon: any;
  viewStyles: ViewStyle;
  onClick(): void;
};

const ButtonLogo = ({icon, viewStyles, onClick}: Props) => {
  return (
    <TouchableOpacity onPress={onClick} style={[styles.container, viewStyles]}>
      <Image source={icon} style={[styles.iconStyles]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: Colors.colorBorder,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 15,
  },
  iconStyles: {
    width: 30,
    height: 30,
  },
});

export default ButtonLogo;
