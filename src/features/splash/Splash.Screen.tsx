/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import {Text, View} from 'react-native';
import {RootStackProp} from '../../navigation/TypeNavigtion';
import {useNavigation} from '@react-navigation/native';
import Styles from '../../theme/Styles';
import React, {useEffect} from 'react';
// import auth from '@react-native-firebase/auth';

const SplashScreen = () => {
  const navigation = useNavigation<RootStackProp>();
  // Set an initializing state whilst Firebase connects
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // Handle user state changes
  // function onAuthStateChanged(user: any) {
  //   setUser(user);
  //   if (initializing) {
  //     setInitializing(false);
  //   }
  // }

  useEffect(() => {
    setTimeout(() => {
      // if (!user) {
      navigation.navigate('Welcome');
      // } else {
      //TODO go to main screen
      // }
    }, 2000);
  }, []);

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) {
  //   return null;
  // }

  return (
    <View style={[Styles.containerCenter]}>
      <Text style={{textAlign: 'center'}}>Splash</Text>
    </View>
  );
};

export default SplashScreen;
