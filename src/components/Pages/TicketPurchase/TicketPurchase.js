import React, { useState } from 'react';
import { Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import globoTickets from '../../../data/TicketsDB';
import styles from './TicketPurchase.style';

const TicketPurchase = ({ route, navigation }) => {
  const [ticketQuantity, setTicketQuantity] = useState('1');
  const { tickId } = route.params;

  // tickId is correct;

  const selectedEvent = globoTickets.find((tickets) => tickets.eventId === tickId);

  const purchase = () => {
    const price = selectedEvent.price * ticketQuantity;
    Alert.alert(`Your cost is ${price}`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedEvent?.event}</Text>
      <Image style={styles.ticketImage} source={selectedEvent.image} />
      <Text styles={styles.shortDescription}>{selectedEvent.shortDescription}</Text>
      <Text style={styles.description}>{selectedEvent.description}</Text>
      <View style={styles.purchaseRow}>
        <Text style={styles.shortDescription}> Quantity:</Text>
        <TextInput
          style={styles.quantityInput}
          onChangeText={(quantity) => setTicketQuantity(quantity)}
          value={ticketQuantity}
          selectTextOnFocus={true}
          keyboardType={'numeric'}
        />
      </View>
      <Text style={styles.price}>Total Price: ${selectedEvent.price * ticketQuantity}</Text>
      <TouchableOpacity onPress={purchase} style={styles.button}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TicketPurchase;
