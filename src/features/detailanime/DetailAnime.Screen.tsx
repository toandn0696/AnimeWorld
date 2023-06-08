import {useNavigation} from '@react-navigation/core';
import {RootStackProp} from '../../navigation/TypeNavigtion';
import BaseScreen from '../../components/BaseScreen';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {DetailAnimeStyles} from './DetailAnime.Styles';
import {Drawables} from '../../asset/images';
import {useDetailAnime} from './useDetailAnime';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import ViewMoreText from '../../components/ViewMoreText';
import Orientation from 'react-native-orientation-locker';

const DetailAnimeScreen = ({route}: any) => {
  const {isLoading, getDetailAnime, data} = useDetailAnime();
  const {id} = route.params;
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();
  const navigation = useNavigation<RootStackProp>();

  useEffect(() => {
    getDetailAnime(id);
  }, []);

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  function renderFirstInfoAnime() {
    return (
      <View style={DetailAnimeStyles.containerInfo}>
        {/* TODO add Name adnime */}
        <Text style={DetailAnimeStyles.textTitle} numberOfLines={1}>
          {data?.title}
        </Text>
        <Pressable style={DetailAnimeStyles.containerMyList}>
          <Image
            style={DetailAnimeStyles.icMylist}
            source={Drawables.ic_my_list}
          />
        </Pressable>
        <Pressable>
          <Image
            style={DetailAnimeStyles.icShare}
            source={Drawables.ic_share}
          />
        </Pressable>
      </View>
    );
  }

  function renderSecondInfoAnime() {
    return (
      <View style={DetailAnimeStyles.containerInfo}>
        <TouchableOpacity style={DetailAnimeStyles.containerRating}>
          <Image
            style={DetailAnimeStyles.icRating}
            source={Drawables.ic_rating}
          />
          <Text style={DetailAnimeStyles.textRating}>9.9</Text>
          <Image
            style={DetailAnimeStyles.icArrowRight}
            source={Drawables.ic_arrow_right}
          />
        </TouchableOpacity>
        <Text
          style={{color: colors.text, ...DetailAnimeStyles.textReleaseDate}}>
          {data?.releaseDate}
        </Text>
        <Text style={DetailAnimeStyles.textTypeAnime}>13+</Text>
        <Text style={DetailAnimeStyles.textTypeAnime}>Japan</Text>
        <Text style={DetailAnimeStyles.textTypeAnime}>Subtile</Text>
      </View>
    );
  }

  function renderPlayButtonAndDownloadButton() {
    return (
      <View style={DetailAnimeStyles.containerButtonsBottomCover}>
        <TouchableOpacity
          style={DetailAnimeStyles.containerButtonPlay}
          onPress={() => {
            navigation.navigate('Watching');
          }}>
          <Image
            style={DetailAnimeStyles.iconPlayStyles}
            source={Drawables.ic_play_button}
          />
          <Text style={DetailAnimeStyles.textPlayStyles}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={DetailAnimeStyles.containerButtonAddMyList}>
          <Image
            style={DetailAnimeStyles.iconButtonDownloadStyles}
            source={Drawables.ic_download_video}
          />
          <Text style={DetailAnimeStyles.textButtonDownloadStyles}>
            Download
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <BaseScreen isLoading={isLoading}>
      <ImageBackground
        style={DetailAnimeStyles.containerCover}
        resizeMode=""
        source={{uri: data?.image}}>
        <LinearGradient
          colors={['#00000090', '#00000000', '#00000000']}
          style={DetailAnimeStyles.shadowCover}
        />
        <Pressable
          style={{
            marginTop:
              Platform.OS === 'ios'
                ? insets.top * 1.2
                : Dimensions.get('window').height * 0.12,
            ...DetailAnimeStyles.containerIconBack,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={Drawables.ic_back} style={DetailAnimeStyles.icBack} />
        </Pressable>
      </ImageBackground>
      {renderFirstInfoAnime()}
      {renderSecondInfoAnime()}
      {renderPlayButtonAndDownloadButton()}
      <Text
        numberOfLines={1}
        style={{color: colors.text, ...DetailAnimeStyles.textGenres}}>
        {`Genres: ${data?.genres.join(', ')}`}
      </Text>
      <ViewMoreText
        content={data?.description}
        showMore={true}
        maxLine={3}
        styleText={{color: colors.text, ...DetailAnimeStyles.textDescription}}
      />
    </BaseScreen>
  );
};

export default DetailAnimeScreen;
