import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  ticket: {
    flexDirection: 'column',
  },
  img: {
    height: 180,
    width: '100%',
  },
  ticketTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ticketsShortDescription: {
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 5,
  },
  ticketDescription: {
    fontWeight: '600',
    padding: 15,
  },
  ticketButton: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 5,
  },
});
