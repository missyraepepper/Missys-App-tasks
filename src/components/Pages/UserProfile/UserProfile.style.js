import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileImage: {
    height: 300,
    width: '100%',
    marginTop: 30,
  },
  textContainer: {
    marginVertical: 40,
    alignItems: 'center',
  },
  name: {
    fontSize: 40,
  },
  username: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {},
  input: {
    height: 40,
    width: Dimensions.get('window').width - 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 30,
    borderRadius: 4,
    borderColor: '#95A5A6',
  },
  button: {
    height: 40,
    width: Dimensions.get('window').width - 100,
    backgroundColor: '#D3072A',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
