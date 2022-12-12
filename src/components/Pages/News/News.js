import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, FlatList, Image } from 'react-native';
import styles from './News.style';

const News = () => {
  const [isLoaded, setDataLoaded] = useState(true);
  const [storyData, setStoryData] = useState();

  const getNews = async () => {
    try {
      let response = await fetch('http://jsonplaceholder.typicode.com/albums/1/photos');
      let stories = await response.json();
      setStoryData(stories);
      setDataLoaded(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);
  console.log(storyData);

  const newsItem = ({ item }) => {
    return (
      <View style={styles.storyList}>
        <Image style={styles.thumb} source={{ uri: item.url }} />
        <Text style={styles.storyText}>{item.title}</Text>
        <Text style={styles.storyText}>{item.url}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {isLoaded ? (
        <ActivityIndicator />
      ) : (
        <FlatList data={storyData} renderItem={newsItem} keyExtractor={(item) => item.title} />
      )}
    </View>
  );
};

export default News;
