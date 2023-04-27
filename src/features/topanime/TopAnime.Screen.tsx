import {FlatList, Image, ImageBackground, Text, View} from 'react-native/types';
import BaseScreen from '../../components/BaseScreen';
import React, {ReactElement, useEffect} from 'react';
import {Drawables} from '../../asset/images';
import LinearGradient from 'react-native-linear-gradient';
import {useTopAnime} from './useTopAnime';
import {TopAnimeStyles} from './TopAnime.Styles';
import {useTheme} from '@react-navigation/native';

type itemList = {item: any; index: number};

const TopAnimeScreen = () => {
  const {isLoading, getTopAnime, data} = useTopAnime();
  const {colors} = useTheme();

  useEffect(() => {
    getTopAnime();
  }, []);

  function renderItemTopAnime({item, index}: itemList): ReactElement<any, any> {
    return (
      <View style={TopAnimeStyles.containerItemList}>
        <ImageBackground
          style={TopAnimeStyles.imageBackground}
          imageStyle={TopAnimeStyles.contentImageBackground}
          source={{uri: item.image}}>
          <LinearGradient
            colors={['#00000000', '#00000090']}
            style={TopAnimeStyles.shadowImageBackground}
          />
          <Text style={TopAnimeStyles.textTopAnime}>{index + 1}</Text>
        </ImageBackground>
        <View style={TopAnimeStyles.containerInfoImage}>
          <Text style={[TopAnimeStyles.textNameAnime, {color: colors.text}]}>
            {item.title}
          </Text>
          <Text style={[TopAnimeStyles.textTypeAnime, {color: colors.text}]}>
            {item.genres.join(', ')}
          </Text>
        </View>
        {buttonAddMyList()}
      </View>
    );
  }

  function buttonAddMyList(isAddMyList: boolean = false) {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image source={Drawables.ic_my_list} />
        <Text>My List</Text>
        <Image source={isAddMyList ? Drawables.ic_tick : Drawables.ic_search} />
      </View>
    );
  }
  return (
    <BaseScreen isLoading={isLoading}>
      <View style={TopAnimeStyles.containerHeader}>
        <Image style={TopAnimeStyles.icBack} source={Drawables.ic_back} />
        <Text style={TopAnimeStyles.textHeader}>Top Hits Anime</Text>
        <Image style={TopAnimeStyles.icSearch} source={Drawables.ic_search} />
      </View>
      <FlatList
        data={data?.results}
        renderItem={item => renderItemTopAnime(item)}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
      />
    </BaseScreen>
  );
};
export default TopAnimeScreen;
