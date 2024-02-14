import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import {contacts} from '../constants/data';

const CreateGroupScreen = ({navigation}) => {
  const [groupName, setGroupName] = useState('');
  const [selectedContacts, setSelectedContacts] = useState([]);

  const handleCreateGroup = () => {
    // Implement logic to create a group with selectedContacts
    console.log('Group created with:', groupName, selectedContacts);
    // Redirect or perform any necessary actions
  };

  const handleSelectContact = contact => {
    const contactID = contact.recordID; // Assuming recordID is the unique identifier
    console.warn(contactID);

    // if (isSelected(contactID)) {
    //   // Deselect the contact
    //   setSelectedContacts(prevContacts =>
    //     prevContacts.filter(
    //       selectedContactID => selectedContactID !== contactID,
    //     ),
    //   );
    // } else {
    //   // Select the contact
    //   setSelectedContacts(prevContacts => [...prevContacts, contactID]);
    // }
  };

  const isSelected = contactID => {
    return selectedContacts.includes(contactID);
  };

  const renderContactItem = ({item}) => (
    <TouchableOpacity onLongPress={() => handleSelectContact(item)}>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <Text>{item.userName}</Text>
        {isSelected(item.recordID) && (
          <View
            style={{
              marginLeft: 10,
              backgroundColor: 'green',
              padding: 5,
              borderRadius: 5,
            }}>
            <Text style={{color: 'white'}}>✔</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <TextInput
        placeholder="Enter Group Name"
        value={groupName}
        onChangeText={text => setGroupName(text)}
      />
      <Button title="Create Group" onPress={handleCreateGroup} />

      {/* List of contacts */}
      <FlatList
        data={contacts}
        keyExtractor={item => item.recordID}
        renderItem={renderContactItem}
      />
    </View>
  );
};

export default CreateGroupScreen;
