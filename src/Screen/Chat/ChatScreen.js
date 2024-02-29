import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import PageContainer from '../../Component/PageContainer';
import {COLORS, FONTS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {contacts} from '../../constants/data';
import {Block} from 'galio-framework';
import {newTheme} from '../../constants/newTheme'

const ChatScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(contacts);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const selectedContactsListRef = useRef(null);

  const handleSearch = text => {
    setSearch(text);
    const filteredData = contacts.filter(user =>
      user.userName.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredUsers(filteredData);
  };

  // const isSelected = id => {
  //   return selectedContacts.some(contact => contact.id === id);
  // };

  // const handleSelectContact = contact => {
  //   const contactID = contact.id;

  //   // After updating selectedContacts, scroll to the end
  //   if (selectedContactsListRef.current) {
  //     selectedContactsListRef.current.scrollToEnd({ animated: true });
  //   }
  //   // Check if the contact is already selected
  //   const isContactSelected = isSelected(contactID);

  //   // Create a copy of the selectedContacts array
  //   const updatedSelectedContacts = [...selectedContacts];

  //   if (isContactSelected) {
  //     // Deselect the contact by filtering it out
  //     const updatedContacts = updatedSelectedContacts.filter(
  //       selectedContact => selectedContact.id !== contactID,
  //     );
  //     setSelectedContacts(updatedContacts);
  //   } else {
  //     // Select the contact by adding it to the array
  //     updatedSelectedContacts.push(contact);
  //     setSelectedContacts(updatedSelectedContacts);
  //   }

  //   // Log the updated selectedContacts array
  //   console.warn('Selected Contacts:', selectedContacts);
  // };

  const renderItem = ({item, index}) => {
    const contactID = item.id;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PlainStack', {
            screen: 'MessageScreen',
            params: {item: item},
          })
        }
        key={index}
        style={[
          {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 22,
            borderBottomColor: newTheme.colors.white,
            borderBottomWidth: 1,
          },
          index % 2 !== 0
            ? {
                backgroundColor: COLORS.tertiaryWhite,
              }
            : {
              backgroundColor : newTheme.colors.white,
            }
        ]}>
        <Block
          style={{
            paddingVertical: 15,
            marginRight: 22,
          }}>
          {item.isOnline && item.isOnline === true && (
            <Block
              style={{
                height: 14,
                width: 14,
                borderRadius: 7,
                backgroundColor: COLORS.green,
                borderColor: COLORS.white,
                borderWidth: 2,
                position: 'absolute',
                top: 14,
                right: 2,
                zIndex: 1000,
              }}></Block>
          )}

          <Image
            source={item.userImg}
            resizeMode="contain"
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
            }}
          />
        </Block>
        <Block
          style={{
            flexDirection: 'column',
          }}>
          <Text style={{...FONTS.h4, marginBottom: 4}}>{item.userName}</Text>
          <Text style={{fontSize: 14, color: COLORS.secondaryGray}}>
            {item.lastSeen}
          </Text>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <PageContainer>
        <Block style={{flex: 1}}>
          <Block
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 22,
              marginTop: 22,
              // height : 25
            }}>
            <Text 
            style={{...FONTS.h5}}
            // style={{fontSize : 22, color : COLORS.secondaryBlack, fontWeight : '600' }}
            >Chat List</Text>
            {/* <TouchableOpacity
                // onPress={() => handleCreateGroup()}
                onPress={() =>
                  navigation.navigate('SelectedGroupContact', {item: selectedContacts})
                }>
                <AntDesign name="plus" size={20} color="#0F1828" />
              </TouchableOpacity> */}
          </Block>
          <Block
            style={{
              marginHorizontal: 22,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS.secondaryWhite,
              height: 48,
              marginVertical: 22,
              paddingHorizontal: 12,
              borderRadius: 20,
            }}>
            <Ionicons name="search-outline" size={24} color={COLORS.black} />
            <TextInput
              style={{
                width: '100%',
                height: '100%',
                marginHorizontal: 12,
              }}
              value={search}
              onChangeText={handleSearch}
              placeholder="Search contact..."
            />
          </Block>
          <Block style={{paddingBottom: 140}}>
            <FlatList
              data={filteredUsers}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </Block>
        </Block>
      </PageContainer>
    </SafeAreaView>
  );
};

export default ChatScreen;
