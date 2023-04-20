import SplashScreen from '../../features/splash/Splash.Screen';
import WelcomeScreen from '../../features/welcome/Welcome.Screen';
import {StackRoutesType} from '../BaseNavigation';
import {RootStackParamList} from '../TypeNavigtion';
import SignInTypeScreen from '../../features/signintype/SignInType.Screen';
import SignUpScreen from '../../features/signup/SignUp.Screen';
import SignInScreen from '../../features/signinidpw/SignIn.Screen';
import ChooseInterestScreen from '../../features/interest/ChooseInterest.Screen';
import EditProfileScreen from '../../features/editprofile/EditProfile.Screen';
import CreatePinScreen from '../../features/createpin/CreatePin.Screen';
import {AppBottomTabNavigation} from '../AppNavigation';
import WatchingScreen from '../../features/watching/Watching.Screen';
import {TestScreen} from '../../features/TestScreen';

// type of the single route in app stack
type AppStackRoutesType = StackRoutesType<RootStackParamList>;
// strictly typed array of app stack routes
export const appStackRoutes: AppStackRoutesType = [
  {
    name: 'Splash',
    component: SplashScreen,
  },
  {
    name: 'Welcome',
    component: WelcomeScreen,
  },
  {
    name: 'SignInType',
    component: SignInTypeScreen,
  },
  {
    name: 'SignUp',
    component: SignUpScreen,
  },
  {
    name: 'SignIn',
    component: SignInScreen,
  },
  {
    name: 'ChooseInterest',
    component: ChooseInterestScreen,
  },
  {
    name: 'EditProfile',
    component: EditProfileScreen,
  },
  {
    name: 'CreatePin',
    component: CreatePinScreen,
  },
  {
    name: 'Main',
    component: AppBottomTabNavigation,
  },
  {
    name: 'Watching',
    component: WatchingScreen,
  },
  {
    name: 'Test',
    component: TestScreen,
  },
];
