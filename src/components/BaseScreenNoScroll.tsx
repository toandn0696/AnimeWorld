import React from 'react';
import {ActivityIndicator, ViewStyle} from 'react-native';
import Styles from '../theme/Styles';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  children?: React.ReactNode;
  style?: ViewStyle;
  isLoading?: boolean;
};
const BaseScreenNoScroll = (props: Props) => {
  return (
    <SafeAreaView style={[Styles.container, {...props.style}]}>
      {props.children}
      {props.isLoading && (
        <ActivityIndicator style={Styles.loading} size={'large'} />
      )}
    </SafeAreaView>
  );
};

export default BaseScreenNoScroll;
