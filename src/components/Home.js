import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView } from 'react-native';
import { images } from '../enums/Images';
import Menu from './Menu';

const Home = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.appLogo} source={images.appCatLogo} />
      <Text styles={styles.title}>App Tasks</Text>
      <Text styles={styles.subtitle}>{props.username}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.content}>SW react native app challenges</Text>
      </View>
      <View style={styles.menu}>
        <Menu />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  textContainer: {
    padding: 20,
  },
  appLogo: {
    height: 250,
    width: '100%',
  },
  title: {
    fontSize: 100,
  },
  subtitle: {
    paddingTop: 5,
  },
  content: {
    fontWeight: '300',
  },
  menu: {
    position: 'absolute',
    bottom: 10,
  },
});

export default Home;
