import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'user12',
  path: './customPath',
});
