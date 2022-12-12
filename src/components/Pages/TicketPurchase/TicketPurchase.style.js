import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flexDirection: 'column', alignItems: 'center', paddingTop: 10 },
  purchaseRow: { flexDirection: 'row' },
  button: { borderTopWidth: 1, borderBottomWidth: 1, width: '60%' },
  title: { paddingBottom: 10 },
  ticketImage: { width: '100%', height: 180 },
  shortDescription: { paddingTop: 5, textAlignVertical: 'center' },
  description: { textAlign: 'left', padding: 10 },
  price: { paddingTop: 5, paddingBottom: 10 },
  buttonText: { textAlign: 'center', padding: 5 },
  quantityInput: { borderWidth: 1, height: 38, width: 40, marginLeft: 25 },
});
