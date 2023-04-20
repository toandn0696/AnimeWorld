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
import Colors from '../../theme/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {useHome} from './useHome';
import {HomeStyles} from './Home.Styles';
// import {storage} from '../../lib/mmkv/mmkv';

const URL_IMAGE_COVER =
  'https://beebom.com/wp-content/uploads/2022/12/Demon-Slayer-Season-3-Release-Date-Trailer-Plot-Cast-and-More.jpg';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const {isLoading, getTopAnime, data} = useHome();

  useEffect(() => {
    // storage.set('user.name', 'xxxx');
    // console.log(`${storage.getString('user.name')}`);
    getTopAnime();
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
      <TouchableOpacity
        style={{
          borderRadius: 25,
          flexDirection: 'row',
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderColor: 'white',
          borderWidth: 2,
          marginStart: 10,
        }}>
        <Image
          style={{width: 10, height: 10, alignSelf: 'center'}}
          source={Drawables.ic_plus}
        />
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            fontSize: 14,
            marginStart: 7,
          }}>
          My List
        </Text>
      </TouchableOpacity>
    );
  }

  function renderPostCardItem(
    isRank: boolean | true,
    {item}: any,
  ): ReactElement<any, any> {
    console.log(item);
    return (
      <ImageBackground
        style={{
          marginEnd: 10,
          height: Dimensions.get('screen').height / 4,
          width: Dimensions.get('screen').width / 2.7,
        }}
        imageStyle={{borderRadius: 15}}
        source={{uri: item.image}}>
        <LinearGradient
          colors={['#00000000', '#00000090']}
          style={{
            borderRadius: 15,
            height: Dimensions.get('screen').height / 4,
            width: Dimensions.get('screen').width / 2.7,
            position: 'absolute',
          }}
        />
        {/* {isRank ? <Text>{item.id}</Text> : <Text>{item.episodeNumber}</Text>} */}
      </ImageBackground>
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
        style={{
          width: '100%',
          aspectRatio: 1.2,
        }}
        resizeMode="cover"
        source={{uri: URL_IMAGE_COVER}}>
        <LinearGradient
          colors={['#00000080', '#00000000', '#000000']}
          style={{width: '100%', aspectRatio: 1.2, position: 'absolute'}}
        />
        <View
          style={{
            marginTop:
              Platform.OS === 'ios'
                ? insets.top * 1.2
                : Dimensions.get('screen').height * 0.05,
          }}>
          <View style={{flexDirection: 'row-reverse'}}>
            <Pressable>
              <Image
                source={Drawables.ic_notification}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'white',
                  marginEnd: 20,
                  padding: 5,
                }}
              />
            </Pressable>

            <Pressable>
              <Image
                source={Drawables.ic_search}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'white',
                  marginEnd: 30,
                  padding: 5,
                }}
              />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            marginBottom: '3%',
            marginStart: 20,
          }}>
          <Text style={{color: 'white'}}>Name</Text>
          <Text style={{color: 'white'}}>Type</Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            {buttonPlay()}
            {buttonAddMyList()}
          </View>
        </View>
      </ImageBackground>
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <Text>Top Hits Anime</Text>
        <Text
          style={{position: 'absolute', end: 0, color: Colors.colorPrimary}}>
          See all
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{marginHorizontal: 10}}
        data={data?.results}
        renderItem={item => renderPostCardItem(true, item)}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
      />
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <Text>New Espisode Releases</Text>
        <Text
          style={{position: 'absolute', end: 0, color: Colors.colorPrimary}}>
          See all
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{marginHorizontal: 10}}
        data={data?.results}
        renderItem={item => renderPostCardItem(true, item)}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
      />
    </BaseScreen>
  );
};

export default HomeScreen;
