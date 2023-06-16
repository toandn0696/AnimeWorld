import React, {useState, useEffect} from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const TestUI = () => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoadMore, setLoadMore] = useState(false);

  useEffect(() => getData(), [page]);

  const getData = () => {
    console.log('getData');
    setLoading(true);
    fetch('https://api.consumet.org/anime/gogoanime/top-airing?page=' + page)
      .then(response => response.json())
      .then(responseJson => {
        setDataSource([...dataSource, ...responseJson.results]);
        setLoading(false);
        setLoadMore(responseJson.hasNextPage);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        {loading ? (
          <ActivityIndicator color="white" style={{marginLeft: 8}} />
        ) : null}
      </View>
    );
  };

  const ItemView = ({item}: any) => {
    return (
      // Flat List Item
      <Text>{item.title.toUpperCase()}</Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={dataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          ListFooterComponent={renderFooter}
          onEndReachedThreshold={5}
          onEndReached={() => {
            if (isLoadMore) {
              setPage(prevPage => prevPage + 1);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default TestUI;
