import React from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import { images } from '../../../enums/Images';
import Menu from '../Menu/Menu';
import styles from './Home.style';

const Home = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.appLogo} source={images.appCatLogo} />
      <Text style={styles.title}>App Tasks</Text>
      <Text style={styles.subtitle}>{props.username}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.content}>SW react native app challenges</Text>
      </View>
      <View style={styles.menu}>
        <Menu />
      </View>
    </SafeAreaView>
  );
};

export default Home;
