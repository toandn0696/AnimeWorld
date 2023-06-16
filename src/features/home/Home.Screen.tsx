/* eslint-disable react-hooks/exhaustive-deps */
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import React, {ReactElement, useEffect} from 'react';
import {Drawables} from '../../asset/images';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {useHome} from './useHome';
import {HomeStyles} from './Home.Styles';
import {useNavigation, useTheme} from '@react-navigation/native';
import {RootStackProp} from '../../navigation/TypeNavigtion';
// import {storage} from '../../lib/mmkv/mmkv';

const URL_IMAGE_COVER =
  'https://beebom.com/wp-content/uploads/2022/12/Demon-Slayer-Season-3-Release-Date-Trailer-Plot-Cast-and-More.jpg';

type itemList = {item: any; index: number};

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const {isLoading, getTopAnime, getEspisode, data, dataEspisode} = useHome();
  const {colors} = useTheme();
  const navigation = useNavigation<RootStackProp>();

  useEffect(() => {
    // storage.set('user.name', 'xxxx');
    // console.log(`${storage.getString('user.name')}`);
    getTopAnime();
    getEspisode();
  }, []);

  function buttonPlay() {
    return (
      <TouchableOpacity style={HomeStyles.containerButtonPlay}>
        <Image
          style={HomeStyles.iconPlayStyles}
          source={Drawables.ic_play_button}
        />
        <Text style={HomeStyles.textPlayStyles}>Play</Text>
      </TouchableOpacity>
    );
  }

  function buttonAddMyList() {
    return (
      <TouchableOpacity style={HomeStyles.containerButtonAddMyList}>
        <Image
          style={HomeStyles.iconButtonAddMyListStyles}
          source={Drawables.ic_plus}
        />
        <Text style={HomeStyles.textButtonAddMyListStyles}>My List</Text>
      </TouchableOpacity>
    );
  }

  function renderPostCardItem(
    {item, index}: itemList,
    isTopAnime?: boolean,
  ): ReactElement<any, any> {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('DetailAnime', {id: item.id});
        }}>
        <ImageBackground
          style={HomeStyles.containerImagePostCardItem}
          imageStyle={HomeStyles.imageStyleImagePostCardItem}
          source={{uri: item.image}}>
          <LinearGradient
            colors={['#00000000', '#00000090']}
            style={HomeStyles.shadowImagePostCardItem}
          />
          {isTopAnime ? (
            <Text style={HomeStyles.textTopAnimeImagePostCardItem}>
              {index + 1}
            </Text>
          ) : (
            <Text style={HomeStyles.textNewEspisodeImagePostCardItem}>
              {item.episodeNumber}
            </Text>
          )}
        </ImageBackground>
      </Pressable>
    );
  }

  return (
    <BaseScreen isLoading={isLoading}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground
        style={HomeStyles.containerCover}
        resizeMode="cover"
        source={{uri: URL_IMAGE_COVER}}>
        <LinearGradient
          colors={['#00000080', '#00000000', '#000000']}
          style={HomeStyles.shadowCover}
        />
        <View
          style={{
            marginTop:
              Platform.OS === 'ios'
                ? insets.top * 1.2
                : Dimensions.get('screen').height * 0.05,
          }}>
          <View style={HomeStyles.containerHeaderCover}>
            <Pressable>
              <Image
                source={Drawables.ic_notification}
                style={HomeStyles.iconNotification}
              />
            </Pressable>

            <Pressable>
              <Image
                source={Drawables.ic_search}
                style={HomeStyles.iconSearch}
              />
            </Pressable>
          </View>
        </View>
        <View style={HomeStyles.containerBottomCover}>
          <Text style={HomeStyles.nameCover} numberOfLines={1}>
            Name
          </Text>
          <Text style={HomeStyles.typeCover}>Type</Text>
          <View style={HomeStyles.containerButtonsBottomCover}>
            {buttonPlay()}
            {buttonAddMyList()}
          </View>
        </View>
      </ImageBackground>
      <View style={HomeStyles.containerContent}>
        <Text style={[HomeStyles.textTopAnime, {color: colors.text}]}>
          Top Hits Anime
        </Text>
        <Pressable
          style={HomeStyles.containerSeeAllTopAnime}
          onPress={() => {
            navigation.navigate('AllTopAnime');
          }}>
          <Text style={HomeStyles.textSeeAll}>See all</Text>
        </Pressable>
      </View>
      <FlatList
        contentContainerStyle={HomeStyles.contentContainerListPostCard}
        data={data?.results}
        renderItem={item => renderPostCardItem(item, true)}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
      />
      <View style={HomeStyles.containerContent}>
        <Text style={[HomeStyles.textTopAnime, {color: colors.text}]}>
          New Espisode Releases
        </Text>
        <Text style={HomeStyles.textSeeAll}>See all</Text>
      </View>
      <FlatList
        contentContainerStyle={{marginHorizontal: 10}}
        data={dataEspisode?.results}
        renderItem={item => renderPostCardItem(item, false)}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
      />
    </BaseScreen>
  );
};

export default HomeScreen;
