import HomeScreen from '../../features/home/Home.Screen';
import {BottomTabRoutesType} from '../BaseNavigation';
import {RootBottomTabParamList} from '../TypeNavigtion';
import ReleaseCalendarScreen from '../../features/releasecalendar/ReleaseCalendar.Screen';
import MyListScreen from '../../features/ mylist/MyList.Screen';
import DownloadScreen from '../../features/download/Download.Screen';
import ProfileScreen from '../../features/profile/Profile.Screen';

type AppBottomTabRoutesType = BottomTabRoutesType<RootBottomTabParamList>;

export const appBottomRoutes: AppBottomTabRoutesType = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'ReleaseCalendar',
    component: ReleaseCalendarScreen,
  },
  {
    name: 'MyList',
    component: MyListScreen,
  },
  {
    name: 'Download',
    component: DownloadScreen,
  },
  {
    name: 'Profile',
    component: ProfileScreen,
  },
];
