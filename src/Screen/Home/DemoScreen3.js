import React, {useEffect, useState,} from 'react';
import {View, Text, PermissionsAndroid, FlatList, ActivityIndicator} from 'react-native';
import Contacts from 'react-native-contacts';

const DemoScreen3 = ({navigation}) => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Request permission to access contacts
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(granted => {
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // If permission is granted, fetch contacts
        fetchContacts();
      } else {
        console.log('Contacts permission denied');
      }
    });
  }, []);

  const fetchContacts = () => {
    setIsLoading(true);
    Contacts.getAll()
      .then(contacts => {
        setContacts(contacts);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const renderContactItem = ({item}) => (
    <View style={{padding: 10}}>
      <Text>Name: {item.displayName}</Text>
      <Text>Phone: {item.phoneNumbers[0]?.number}</Text>
    </View>
  );

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  return (
    <View style={{flex: 1, padding: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
        Contact List
      </Text>
      <FlatList
        data={contacts}
        renderItem={renderContactItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default DemoScreen3;
