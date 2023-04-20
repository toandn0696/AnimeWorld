import {
  Dimensions,
  Image,
  KeyboardTypeOptions,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../theme/Colors';
import {useTheme} from '@react-navigation/native';

type PropCommonTextField = {
  isShowIconStart?: boolean;
  iconStart?: any;
  isShowIconEnd?: boolean;
  iconEnd?: any;
  placeHolder: string;
  onTextChange(text: string): void;
  onPressInIconEnd?(): void;
  onPressOutIconEnd?(): void;
  isTypPassword?: boolean;
  stylesContainer?: ViewStyle;
  typeInput?: KeyboardTypeOptions;
};

const CommonTextField = (props: PropCommonTextField) => {
  const [isFocus, setIsFocus] = useState(false);
  const {colors} = useTheme();
  let defaultProps = {
    isShowIconStart: props.isShowIconStart || false,
    isShowIconEnd: props.isShowIconEnd || false,
    textInput: props.typeInput || 'default',
  };
  return (
    <View
      style={[
        styles.container,
        isFocus
          ? {...styles.containerFocusStyles}
          : {...styles.containerBlurStyles},
        {...props.stylesContainer},
      ]}>
      {defaultProps.isShowIconStart ? (
        <Image
          style={[
            styles.iconStart,
            isFocus
              ? {tintColor: Colors.colorPrimary}
              : {tintColor: Colors.colorIconBlur},
          ]}
          source={props.iconStart}
          resizeMode="contain"
        />
      ) : (
        <></>
      )}
      <TextInput
        style={[styles.input, {color: colors.text}]}
        placeholder={props.placeHolder}
        placeholderTextColor="gray"
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
        secureTextEntry={props.isTypPassword ? true : false}
        selectionColor={'black'}
        keyboardType={defaultProps.textInput}
        onChangeText={props.onTextChange}
      />
      {defaultProps.isShowIconEnd ? (
        <Pressable
          onPressIn={props.onPressInIconEnd}
          onPressOut={props.onPressOutIconEnd}>
          <Image
            style={[
              styles.iconEnd,
              isFocus
                ? {tintColor: Colors.colorPrimary}
                : {tintColor: Colors.colorIconBlur},
            ]}
            source={props.iconEnd}
            resizeMode="contain"
          />
        </Pressable>
      ) : (
        <></>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 1.2,
    height: Dimensions.get('screen').height / 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFocusStyles: {
    borderColor: Colors.colorBorderFocusTextInput,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: Colors.colorBgFocusTextInput,
  },
  containerBlurStyles: {
    borderColor: Colors.colorBorder,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: Colors.colorBgBlurtextInput,
  },
  iconStart: {
    width: 20,
    height: 20,
    padding: 10,
    marginStart: 10,
  },
  iconEnd: {
    width: 20,
    height: 20,
    padding: 10,
    marginEnd: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 14,
  },
});

export default CommonTextField;
