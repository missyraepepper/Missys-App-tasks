import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import globoTickets from '../../../data/TicketsDB';
import styles from './Tickets.style';

const Tickets = ({ navigation }) => {
  const ticketItem = ({ item }) => {
    return (
      <View style={styles.ticket}>
        <View>
          <Image style={styles.img} source={item.image} />
        </View>
        <View>
          <Text style={styles.ticketTitle}>{item.event}</Text>
          <Text style={styles.ticketsShortDescription}>{item.shortDescription}</Text>
          <Text style={styles.ticketDescription} numberOfLines={2} ellipsizeMode={'tail'}>
            {item.description}
          </Text>
          <Text style={styles.ticketsShortDescription}>price:{item.price}</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Purchase', { tickId: item.eventId });
            }}
          >
            <Text style={styles.ticketButton}>GET TICKETS</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={globoTickets} renderItem={ticketItem} keyExtractor={(item) => item.eventId} />
    </View>
  );
};

export default Tickets;
