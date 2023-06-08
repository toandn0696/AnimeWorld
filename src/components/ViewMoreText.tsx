import React, {BaseSyntheticEvent, useCallback, useState} from 'react';
import {Pressable, StyleSheet, Text, TextStyle, View} from 'react-native';
import Colors from '../theme/Colors';

type Props = {
  content: string;
  maxLine: number;
  showMore: boolean;
  styleText: TextStyle;
};

const ViewMoreText = (props: Props) => {
  const [isShowView, setIsShowView] = useState(false);
  const [isShowMore, setIsShowMore] = useState(props.showMore);
  function onPressShowMore() {
    setIsShowMore(!isShowMore);
  }

  function onLayout(event: BaseSyntheticEvent) {
    const {height} = event.nativeEvent.layout;
    const lineHeight = 10;
    const maxLine = props.maxLine;
    const maxHeight = maxLine * lineHeight;
    if (maxLine > 0 && height > maxHeight) {
      setIsShowView(true);
    }
  }

  return (
    <View>
      <Text
        style={props.styleText}
        numberOfLines={isShowMore ? props.maxLine : 0}
        ellipsizeMode="tail"
        onLayout={onLayout}>
        {props.content}
      </Text>
      {isShowView && (
        <Pressable onPress={onPressShowMore}>
          <Text style={{...props.styleText, ...styles.textShowMore}}>
            {isShowMore ? 'View More' : 'View Less'}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textShowMore: {
    color: Colors.colorPrimary,
    marginTop: 5,
  },
});

export default ViewMoreText;
