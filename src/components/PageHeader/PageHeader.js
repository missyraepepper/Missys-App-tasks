import React from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity, View } from 'react-native';
import styles from './PageHeader.style';

const PageHeader = ({
  leftButtonIcon,
  rightButtonIcon,
  titleText,
  leftButtonPress,
  rightButtonPress,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.leftButton} onPress={leftButtonPress}>
        {leftButtonIcon}
      </TouchableOpacity>
      <Text style={styles.titleText}>{titleText}</Text>
      <TouchableOpacity style={styles.rightButton} onPress={rightButtonPress}>
        {rightButtonIcon}
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default PageHeader;
