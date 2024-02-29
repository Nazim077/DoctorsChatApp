import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import PageContainer from '../../Component/PageContainer';
import {COLORS, FONTS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {contacts} from '../constants/data';
import {Block} from 'galio-framework';
import {newTheme} from '../../constants/newTheme'
import AsyncStorage from '@react-native-async-storage/async-storage';

const GroupList = ({navigation, route}) => {
  debugger;
  const contact = route?.params?.item;
  //   localStorage.setItem('existing', contact);
  console.warn('contact', contact);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState();
  const [selectedContacts, setSelectedContacts] = useState([]);
  const selectedContactsListRef = useRef(null);
  const [groups, setGroups] = useState([]);

  const storeData = async (key, data) => {
    try {
      let existingData = await getData(key);
      const updatedData = [...existingData, ...data];
      const jsonData = JSON.stringify(updatedData);
      await AsyncStorage.setItem(key, jsonData);
      console.log(`Data stored successfully for key: ${key}`);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async key => {
    try {
      const response = await AsyncStorage.getItem(key);
      const storedData = JSON.parse(response);
      console.log(`Data retrieved successfully for key: ${key}`, storedData);
      return storedData || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // const getData = async key => {
  //   try {
  //     const jsonData = await AsyncStorage.getItem(key);
  //     return jsonData != null ? JSON.parse(jsonData) : null;
  //   } catch (error) {
  //     console.log('Error getting data:', error);
  //     throw error; // Re-throw the error for the caller to handle
  //   }
  // };
  // remove data from async storage after some time
  // const removeDataAfterDelay = async (key, delay) => {
  //   setTimeout(async () => {
  //     try {
  //       await AsyncStorage.removeItem(key);
  //       console.log(`Data removed successfully for key: ${key}`);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, delay);
  // };

  useEffect(() => {
    /* const contact = route?.params?.item; */

    /* if (contact) { */
    storeData('contact', contact).then(() => {
      getData('contact').then(data => {
        setGroups(data);
      });
      // removeDataAfterDelay('contact', 300000);  //300000// Remove data after 5000 milliseconds (5 seconds)
    });
  }, []);

  const handleSearch = text => {
    setSearch(text);
    const filteredData = groups.filter(group =>
      group.name.toLowerCase().includes(text.toLowerCase()),
    );
    if (groups) {
      setGroups(filteredData);
    }
  };

  console.log('groupData', groups);

  //   const NewData = [
  //     {
  //       id: 1,
  //       member: {
  //         id: 1,
  //         isOnline: false,
  //         lastMessage: 'How is it going...',
  //         lastSeen: '3 Days ago',
  //         messageInQueue: 3,
  //         sentDate: '12/7',
  //         userImg: 11,
  //         userName: 'John Doe',
  //       },
  //       name : 'Avenger',
  //       img : require('../assets/doc1.jpg')
  //     }
  //   ];

  const renderItem = ({item, index}) => {
    const contactID = item.id;

    return (
      <TouchableOpacity
        // onPress={() => navigation.navigate('GroupScreen', {item : item, groups :  groups, setGroups : setGroups})
        onPress={() =>
          navigation.navigate('PlainStack', {
            screen: 'GroupScreen',
            params: {item: item, groups: groups, setGroups: setGroups},
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
            :{
              backgroundColor : newTheme.colors.white,
            }
        ]}>
        <Block
          style={{
            paddingVertical: 15,
            marginRight: 22,
          }}>
          <Image
            source={{uri: item.img}}
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
          <Text style={{...FONTS.h4, marginBottom: 4}}>{item.name}</Text>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Text>Hello</Text> */}
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
            <Text style={{...FONTS.h5}}>Group</Text>
            <TouchableOpacity
              // onPress={() => handleCreateGroup()}
              onPress={() =>
                navigation.navigate('SelectedGroupContact', {
                  item: selectedContacts,
                })
              }>
              <AntDesign name="plus" size={20} color="#0F1828" />
            </TouchableOpacity>
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
              placeholder="Search Group..."
            />
          </Block>
          <Block style={{paddingBottom: 140}}>
            <FlatList
              data={groups}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </Block>
        </Block>
      </PageContainer>
    </SafeAreaView>
  );
};

export default GroupList;
