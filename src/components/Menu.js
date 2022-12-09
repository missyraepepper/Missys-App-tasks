import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    width: Dimensions.get('window').width,
    borderTopWidth: 1,
    backgroundColor: '#95a5a6',
    borderColor: '#95a5a6',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  buttonText: {
    color: 'white',
  },
  line: {
    backgroundColor: 'white',
    height: '100%',
    width: 1,
  },
});
export default Menu;
