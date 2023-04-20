import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Colors from '../../theme/Colors';

type Props = {
  text: String | any;
  icon: any;
  containerStyles?: ViewStyle;
};

const ButtonSignInWith = ({text, icon, containerStyles}: Props) => {
  return (
    <TouchableOpacity style={[styles.containerStyles, {...containerStyles}]}>
      <Image style={styles.iconStyles} source={icon} />
      <Text style={styles.textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  containerStyles: {
    borderColor: Colors.colorBorder,
    borderWidth: 0.5,
    borderRadius: 15,
    flexDirection: 'row',
    width: Dimensions.get('screen').width / 1.2,
    height: Dimensions.get('screen').height / 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    fontSize: 16,
    marginStart: 10,
    fontWeight: '600',
  },
  iconStyles: {
    width: 30,
    height: 30,
  },
});
export default ButtonSignInWith;
