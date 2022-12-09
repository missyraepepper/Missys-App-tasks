import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import globoTickets from '../data/TicketsDB';

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

const styles = StyleSheet.create({
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

export default Tickets;
