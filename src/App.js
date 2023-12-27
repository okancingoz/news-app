import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => {
              return (
                <Image
                  style={styles.banner_image}
                  source={{uri: bannerNews.imageUrl}}></Image>
              );
            })}
          </ScrollView>
        )}
        data={news_data}
        renderItem={renderNews}
        keyExtractor={item => item.u_id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 48,
  },
});

export default App;
