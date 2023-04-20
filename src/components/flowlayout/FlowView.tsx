import React from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import type {PropsWithChildren} from 'react';
import {FlowStyles} from './Flow.Styles';

type PreviewLayoutProps = PropsWithChildren<{
  values: {name: string; isSelected: boolean}[];
  setSelectedValue: (data: {name: string; isSelected: boolean}) => void;
  stylesContainer: ViewStyle;
}>;

const FlowLayout = ({
  values,
  setSelectedValue,
  stylesContainer,
}: PreviewLayoutProps) => {
  return (
    <View style={[FlowStyles.row, stylesContainer]}>
      {values.map(value => (
        <TouchableOpacity
          key={value.name}
          onPress={() => setSelectedValue(value)}
          style={[
            FlowStyles.button,
            value.isSelected ? FlowStyles.selected : FlowStyles.unselected,
          ]}>
          <Text
            style={[
              FlowStyles.buttonLabel,
              value.isSelected
                ? FlowStyles.selectedLabel
                : FlowStyles.unSelectedLabel,
            ]}>
            {value.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FlowLayout;
