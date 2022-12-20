import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Menu.style';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => navigation.navigate('Tickets')} style={styles.button}>
        <Text style={styles.buttonText}>Tickets</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity onPress={() => navigation.navigate('Contact')} style={styles.button}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity onPress={() => navigation.navigate('News')} style={styles.button}>
        <Text style={styles.buttonText}>News</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity onPress={() => navigation.navigate('UserProfile')} style={styles.button}>
        <Text style={styles.buttonText}>UserProfile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
