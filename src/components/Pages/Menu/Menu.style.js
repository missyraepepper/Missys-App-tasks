import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    height: '100%',
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
