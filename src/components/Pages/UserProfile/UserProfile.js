import React from 'react';
import { Image, Text, TouchableOpacity, View, stylesheet } from 'react-native';
import styles from './UserProfile.style';
import { images } from '../../../enums/Images';
import PageHeader from '../../PageHeader/PageHeader';
import { ArrowLeft, Cat } from 'phosphor-react-native';

const UserProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <PageHeader
          titleText={'Page'}
          leftButtonIcon={<ArrowLeft size={32} />}
          rightButtonIcon={<Cat size={32} />}
          leftButtonPress={() => navigation.navigate('Home')}
        />
        <Image style={styles.profileImage} source={images.userProfile} />
        <Text style={styles.name}>Missy</Text>
        <Text style={styles.username}>missyraepepper</Text>
        <Text style={styles.bio}>Welovecats</Text>
      </View>
    </View>
  );
};
export default UserProfile;
