import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, stylesheet, TextInput } from 'react-native';
import styles from './UserProfile.style';
import { images } from '../../../enums/Images';
import PageHeader from '../../PageHeader/PageHeader';
import { ArrowLeft, Cat } from 'phosphor-react-native';

const UserProfile = ({ navigation }) => {
  const [name, setName] = useState('Missy');
  const [editMode, setEditMode] = useState(false);
  const [username, setusername] = useState('missyraepepper');
  const [bio, setbio] = useState('Welovecats');
  console.log(editMode);
  return (
    <View style={styles.container}>
      <PageHeader
        titleText={'Page'}
        leftButtonIcon={<ArrowLeft size={32} />}
        rightButtonIcon={<Cat size={32} />}
        leftButtonPress={() => navigation.navigate('Home')}
        rightButtonPress={() => setEditMode(true)}
      />
      <View style={styles.textContainer}>
        <Image style={styles.profileImage} source={images.userProfile} />

        {editMode ? (
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            value={name}
            placeholder={'name'}
          />
        ) : (
          <Text style={styles.name}>Missy</Text>
        )}

        {editMode ? (
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            value={username}
            placeholder={'username'}
          />
        ) : (
          <Text style={styles.username}>missyraepepper</Text>
        )}

        {/*
         * editMode = false
         * we love cats will render
         *  click edit mode to true Text input instead
         * */}
        {editMode ? (
          <TextInput style={styles.input} onChangeText={() => {}} value={bio} placeholder={'bio'} />
        ) : (
          <Text style={styles.bio}>Welovecats</Text>
        )}
      </View>
      {editMode ? (
        <TouchableOpacity style={styles.button} onPress={() => setEditMode(false)}>
          <Text>Save</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default UserProfile;
