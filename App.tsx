import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigation} from './src/navigation/AppNavigation';
import React from 'react';
import {useColorScheme} from 'react-native';
import {AppDarkTheme, AppLightTheme} from './src/theme/Theme';
import {QueryClient, QueryClientProvider} from 'react-query';

export default function App() {
  const scheme = useColorScheme();
  return (
    <QueryClientProvider client={new QueryClient()}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={scheme === 'dark' ? AppDarkTheme : AppLightTheme}>
          <AppNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
