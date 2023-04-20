import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import Colors from './Colors';

export const AppLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors,
    primary: '#07B940',
  },
};

export const AppDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...Colors,
    primary: '#07B940',
  },
};
