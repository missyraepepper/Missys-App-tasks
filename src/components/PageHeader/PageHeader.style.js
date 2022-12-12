import { StyleSheet } from 'react-native';

const button = {
  position: 'absolute',
  paddingHorizontal: 16,
  justifyContent: 'center',
  top: 45,
  bottom: 0,
};

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    justifyContent: 'center',
    backgroundColor: '#D3072A',
  },
  titleText: {
    fontSize: 20,
    color: 'white',
  },
  leftButton: {
    ...button,
    left: 0,
  },
  rightButton: {
    ...button,
    right: 0,
  },
});
