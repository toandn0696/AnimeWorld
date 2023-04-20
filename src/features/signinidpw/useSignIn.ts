// import auth from '@react-native-firebase/auth';
// // import {appleAuth} from '@invertase/react-native-apple-authentication';
// // import {appleAuthAndroid} from '@invertase/react-native-apple-authentication';
// import {v4 as uuid} from 'uuid';
// import {useNavigation} from '@react-navigation/native';
// import {RootStackProp} from '../../navigation/TypeNavigtion';
// // import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

// const useSignIn = () => {
//   const navigation = useNavigation<RootStackProp>();

//   function loginWithIDPW(email: string, pass: string) {
//     auth()
//       .createUserWithEmailAndPassword(email, pass)
//       .then(() => {
//         // navigation.navigate()
//       })
//       .catch(error => {
//         if (error.code === 'auth/email-already-in-use') {
//           console.log('That email address is already in use!');
//         }

//         if (error.code === 'auth/invalid-email') {
//           console.log('That email address is invalid!');
//         }

//         console.error(error);
//       });
//   }

//   async function onAppleButtonPress() {
//     // performs login request
//     const appleAuthRequestResponse = await appleAuth.performRequest({
//       requestedOperation: appleAuth.Operation.LOGIN,
//       // Note: it appears putting FULL_NAME first is important, see issue #293
//       requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
//     });

//     // get current authentication state for user
//     // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
//     const credentialState = await appleAuth.getCredentialStateForUser(
//       appleAuthRequestResponse.user,
//     );

//     // use credentialState response to ensure the user is authenticated
//     if (credentialState === appleAuth.State.AUTHORIZED) {
//       // user is authenticated
//     }
//   }

//   async function onAppleButtonPressForAndroid() {
//     // Generate secure, random values for state and nonce
//     const rawNonce = uuid();
//     const state = uuid();

//     // Configure the request
//     appleAuthAndroid.configure({
//       // The Service ID you registered with Apple
//       clientId: 'com.example.client-android',

//       // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
//       // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
//       redirectUri: 'https://example.com/auth/callback',

//       // The type of response requested - code, id_token, or both.
//       responseType: appleAuthAndroid.ResponseType.ALL,

//       // The amount of user information requested from Apple.
//       scope: appleAuthAndroid.Scope.ALL,

//       // Random nonce value that will be SHA256 hashed before sending to Apple.
//       nonce: rawNonce,

//       // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
//       state,
//     });

//     // Open the browser window for user sign in
//     // const response = await appleAuthAndroid.signIn();

//     // Send the authorization code to your backend for verification
//   }

//   async function onFacebookButtonPress() {
//     // Attempt login with permissions
//     const result = await LoginManager.logInWithPermissions([
//       'public_profile',
//       'email',
//     ]);

//     if (result.isCancelled) {
//       throw 'User cancelled the login process';
//     }

//     // Once signed in, get the users AccesToken
//     const data = await AccessToken.getCurrentAccessToken();

//     if (!data) {
//       throw 'Something went wrong obtaining access token';
//     }

//     // Create a Firebase credential with the AccessToken
//     const facebookCredential = auth.FacebookAuthProvider.credential(
//       data.accessToken,
//     );

//     // Sign-in the user with the credential
//     return auth().signInWithCredential(facebookCredential);
//   }

//   return {
//     loginWithIDPW,
//     onAppleButtonPress,
//     onAppleButtonPressForAndroid,
//     onFacebookButtonPress,
//   };
// };

// export default useSignIn;
