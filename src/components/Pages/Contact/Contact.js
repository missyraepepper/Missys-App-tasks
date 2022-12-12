import React, { useState } from 'react';
import { Button, Text, TextInput, View, Alert } from 'react-native';
import styles from './Contact.style';

const Contact = ({ navigation }) => {
  const [formName, setFormName] = useState('EnterName');
  const [formEmail, setFormEmail] = useState('Enter Email');
  const [formPhoneNumber, setFormPhoneNumber] = useState('Enter Phone Number');
  const [formMessage, setFormMessage] = useState('Let us know whats on your mind');

  const submit = () => {
    if (!formName || !formEmail || !formMessage) {
      Alert.alert('Please enter info in all required fields');
    } else {
      Alert.alert(`Thank you ${formName}`);
      navigation.navigate('Home');
    }
  };
  return (
    <View style={styles.form}>
      <Text style={styles.labels}>Name: *required</Text>
      <TextInput
        style={styles.txtInput}
        onChangeText={(name) => setFormName(name)}
        value={formName}
        autoCapitalize={'words'}
        selectTextOnFocus={true}
      />

      <Text style={styles.labels}>Email: *required</Text>
      <TextInput
        style={styles.txtInput}
        onChangeText={(email) => setFormEmail(email)}
        value={formEmail}
        selectTextOnFocus={true}
      />

      <Text style={styles.labels}>Phone: *required</Text>
      <TextInput
        style={styles.txtInput}
        onChangeText={(phone) => setFormPhoneNumber(phone)}
        value={formPhoneNumber}
        selectTextOnFocus={true}
      />

      <Text style={styles.labels}>Message: *required</Text>
      <TextInput
        style={styles.multiTxtInput}
        onChangeText={(message) => setFormMessage(message)}
        value={formMessage}
        multiline={true}
        numberOfLines={3}
        selectTextOnFocus={true}
      />
      <Button title={'Contact Us'} color={'#708090'} onPress={submit} />
    </View>
  );
};

export default Contact;
