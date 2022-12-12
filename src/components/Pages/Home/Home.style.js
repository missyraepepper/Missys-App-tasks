import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
