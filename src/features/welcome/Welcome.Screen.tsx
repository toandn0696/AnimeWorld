import React, {useRef} from 'react';
import {Animated, FlatList, View} from 'react-native';
import ExpandingDot from '../../components/paginator/Paginator';
import SliderItem from './slider/SliderItem';
import {WelcomeStyle} from './Welcome.Style';
import PrimaryButtonApp from '../../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackProp} from '../../navigation/TypeNavigtion';
import {useTranslation} from 'react-i18next';

const SLIDER_DATA = [
  {
    key: '1',
    text: 'text 1',
  },
  {
    key: '2',
    text: 'text 2',
  },
  {
    key: '3',
    text: 'text 3',
  },
];

const WelcomeScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<RootStackProp>();
  const {t} = useTranslation();

  return (
    <View style={WelcomeStyle.container}>
      <FlatList
        data={SLIDER_DATA}
        keyExtractor={(item: any) => {
          return item.key;
        }}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {x: scrollX}},
            },
          ],
          {
            useNativeDriver: false,
          },
        )}
        pagingEnabled
        horizontal
        renderItem={(item: any) => <SliderItem text={item.item.text} />}
      />
      <ExpandingDot
        data={SLIDER_DATA}
        expandingDotWidth={20}
        scrollX={scrollX}
        inActiveDotOpacity={0.6}
        dotStyle={WelcomeStyle.dotStyle}
        containerStyle={WelcomeStyle.containerDotStyle}
      />
      <PrimaryButtonApp
        text={t('get_started')}
        onPress={() => {
          navigation.navigate('SignInType');
        }}
        containerStyles={WelcomeStyle.containerButton}
      />
    </View>
  );
};

export default WelcomeScreen;
