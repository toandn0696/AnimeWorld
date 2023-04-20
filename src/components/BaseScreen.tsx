import React from 'react';
import {ActivityIndicator, ScrollView, View, ViewStyle} from 'react-native';
import Styles from '../theme/Styles';

type Props = {
  children?: React.ReactNode;
  style?: ViewStyle;
  isLoading?: boolean;
};
const BaseScreen = (props: Props) => {
  return (
    <View style={Styles.container}>
      <ScrollView
        style={Styles.container}
        contentContainerStyle={{...props.style}}
        keyboardShouldPersistTaps="handled">
        {props.children}
        {props.isLoading && (
          <ActivityIndicator style={Styles.loading} size={'large'} />
        )}
      </ScrollView>
    </View>
  );
};

export default BaseScreen;
