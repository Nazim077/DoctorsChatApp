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
  import PageContainer from '../Component/PageContainer';
  import {COLORS, FONTS} from '../constants/theme';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  // import {contacts} from '../constants/data';
  import {Block} from 'galio-framework';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const GroupScreens = ({navigation, route}) => {
    const contact = route?.params?.item
    //   localStorage.setItem('existing', contact);
    console.log('contact', contact);
    const [search, setSearch] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(contact);
    const [selectedContacts, setSelectedContacts] = useState([]);
    const selectedContactsListRef = useRef(null);
    const [groups, setGroups] = useState([])
    
   
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
  
   const getData = async (key) => {
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
      const contact = route?.params?.item;
  
      if (contact) {
        storeData('contact', contact).then(() => {
          getData('contact').then((data) => setGroups(data));
        //   removeDataAfterDelay('contact', 300000);  //300000// Remove data after 5000 milliseconds (5 seconds)
        });
      }
    }, [route?.params?.item]);
  
    const handleSearch = (text) => {
      setSearch(text);
      const filteredData = groups.filter((group) =>
        group.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredUsers(filteredData);
    };
  
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
          onPress={() => handleSelectContact(item)}
          key={index}
          style={[
            {
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 22,
              borderBottomColor: COLORS.secondaryWhite,
              borderBottomWidth: 1,
            },
            index % 2 !== 0
              ? {
                  backgroundColor: COLORS.tertiaryWhite,
                }
              : null,
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
              <Text style={{...FONTS.h4}}>Group</Text>
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
  
  export default GroupScreens;
  