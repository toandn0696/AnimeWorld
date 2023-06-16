import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  SignInType: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ChooseInterest: undefined;
  EditProfile: undefined;
  CreatePin: undefined;
  Main: undefined;
  Watching: undefined;
  DetailAnime: {id: string};
  AllTopAnime: undefined;
  TestUI: undefined;
};

export type RootBottomTabParamList = {
  Home: undefined;
  ReleaseCalendar: undefined;
  MyList: undefined;
  Download: undefined;
  Profile: undefined;
};

export type RootStackProp = NativeStackNavigationProp<RootStackParamList>;
