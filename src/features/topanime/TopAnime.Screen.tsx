/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList, Image, ImageBackground, Text, View} from 'react-native';
import React, {ReactElement, useEffect, useState} from 'react';
import {Drawables} from '../../asset/images';
import LinearGradient from 'react-native-linear-gradient';
import {useTopAnime} from './useTopAnime';
import {TopAnimeStyles} from './TopAnime.Styles';
import {useTheme} from '@react-navigation/native';
import BaseScreenNoScroll from '../../components/BaseScreenNoScroll';
import {ResponseTopAnime} from '../../data/model/TopAnime';

type itemList = {item: any; index: number};

const TopAnimeScreen = () => {
  const {isLoading, getTopAnime, data} = useTopAnime();
  const {colors} = useTheme();

  const [listData, setListData] = useState<ResponseTopAnime[]>([]);
  const [page, setPage] = useState(1);
  const [needLoadMore, setLoadMore] = useState(false);

  useEffect(() => {
    getTopAnime(page);
  }, [page]);

  useEffect(() => {
    if (data?.results !== undefined) {
      console.log(data?.hasNextPage);
      setListData([...listData, ...data.results]);
      setLoadMore(data?.hasNextPage);
    }
  }, [data?.currentPage]);

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
          <Text
            style={[TopAnimeStyles.textNameAnime, {color: colors.text}]}
            numberOfLines={2}>
            {item.title}
          </Text>
          <Text
            style={[TopAnimeStyles.textTypeAnime, {color: colors.text}]}
            numberOfLines={2}>
            {item.genres.join(', ')}
          </Text>
        </View>
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
    <BaseScreenNoScroll isLoading={isLoading}>
      <View style={TopAnimeStyles.containerHeader}>
        <Image style={TopAnimeStyles.icBack} source={Drawables.ic_back} />
        <Text style={TopAnimeStyles.textHeader}>Top Hits Anime</Text>
        <Image style={TopAnimeStyles.icSearch} source={Drawables.ic_search} />
      </View>
      <FlatList
        style={{marginTop: 20, marginHorizontal: '5%'}}
        data={listData}
        renderItem={item => renderItemTopAnime(item)}
        keyExtractor={(item: ResponseTopAnime) => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (needLoadMore) {
            setPage(prevPage => prevPage + 1);
          }
        }}
      />
    </BaseScreenNoScroll>
  );
};
export default TopAnimeScreen;
