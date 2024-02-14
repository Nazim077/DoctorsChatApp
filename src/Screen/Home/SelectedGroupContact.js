import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Block} from 'galio-framework';
import {COLORS, FONTS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SelectedGroupContact = ({navigation, route}) => {
  const contacts = route.params;
  // console.warn('contacts', contacts);
  // console.warn('img', groupImg);
  const [groupName, setGroupName] = useState('');
  const [group, setGroup] = useState([]);
  const [newData, setNewData] = useState(null);
  const [image, setImage] = useState('');

  const imgPic = async () => {
    try {
      const doc = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      // console.warn(doc);
      setImage(doc.uri);
    } catch (err) {
      console.log(err);
    }
  };

  console.log('images', image);

  debugger;

  useEffect(() => {
    if (contacts && contacts.item && contacts.item.length)
      setNewData(contacts.item);
    debugger;
  }, []);
  //   const [selectedContacts, setSelectedContacts] = useState([]);

  const handleCreateGroup = () => {
    // Implement logic to create a group with selectedContacts
    console.warn('Group created with:', groupName, newData);
    const payload = [
      {
        id: 2,
        member: newData,
        name: groupName,
        img: image,
      },
    ];
    setGroup(payload);
    navigation.navigate('GroupList', {item: payload});
    // Redirect or perform any necessary actions
  };

  // const handleCreateGroup = async () => {
  //   // Implement logic to create a group with selectedContacts
  //   console.warn('Group created with:', groupName, newData);
  //   const payload = [
  //     {
  //       id: 1,
  //       member: newData,
  //       name: groupName,
  //       img: image,
  //     },
  //   ];
  //   setGroup(payload);

  //   try {
  //     await storeData('groupData', payload);
  //     console.log('Group data stored successfully.');
  //   } catch (error) {
  //     console.log('Error storing group data:', error);
  //   }

  //   navigation.navigate('GroupList', {item: payload});
  //   // Redirect or perform any necessary actions
  // };

  // const storeData = async (key, data) => {
  //   try {
  //     let existingData = await getData(key);
  //     const updatedData = [...existingData, ...data];
  //     const jsonData = JSON.stringify(updatedData);
  //     await AsyncStorage.setItem(key, jsonData);
  //     console.log(`Data stored successfully for key: ${key}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (group) {
  //     storeData('contact').then(data => setGroup(data));
  //   }
  // }, []);
  console.warn('group', group);

  // const getData = async key => {
  //   try {
  //     const jsonData = await AsyncStorage.getItem(key);
  //     return jsonData != null ? JSON.parse(jsonData) : null;
  //   } catch (error) {
  //     console.log('Error getting data:', error);
  //     throw error; // Re-throw the error for the caller to handle
  //   }
  // };

  const renderItem1 = ({item}) => {
    debugger;
    return (
      <Block style={{margin: 4, padding: 10}}>
        <TouchableOpacity onPress={() => console.warn('called')}>
          <Image
            source={item.userImg}
            resizeMode="contain"
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
            }}
          />
          {/* <Ionicons
            name="close-circle"
            size={20}
            color={COLORS.green}
            style={{
              position: 'absolute',
              // bottom: 0,
              // right: 0,
              left: 33,
              top: 30,
              width: 22,
              height: 22,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              // padding: 0.5,
            }}
          /> */}
          <Block
            style={
              {
                // flexDirection: 'column',
              }
            }>
            <Text style={{...FONTS.h4, marginBottom: 4}}>{item.userName}</Text>
          </Block>
        </TouchableOpacity>
      </Block>
    );
  };
  console.warn('new data', newData);
  return (
    <>
      <Block
        style={{
          flex: 1,
          justifyContent: 'space-around',
          flexDirection: 'row',
          maxHeight: 150,
        }}>
        <Block>
          <TouchableOpacity onPress={() => imgPic()}>
            <Block
              style={{
                marginTop: 50,
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: COLORS.gray,
              }}>
              {image ? (
                <Image
                  source={{uri: image}}
                  resizeMode="contain"
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                  }}
                />
              ) : (
                <Ionicons
                  name="camera-outline"
                  size={24}
                  style={{top: 13, left: 12}}
                />
              )}
            </Block>
          </TouchableOpacity>
        </Block>

        <Block
          // style={{
          //   flexDirection: 'row',
          //   justifyContent: 'space-between',
          //   alignItems: 'center',
          //   marginHorizontal: 22,
          //   marginTop: 42,
          //   paddingHorizontal: 10,
          //   borderRadius: 12,
          // }}
          style={{marginTop: 50}}>
          <TextInput
            // style={{
            //   width: 280,
            //   height: 60,
            //   borderRadius: 12,
            //   backgroundColor: '#C9D7DD',
            // }}
            // style={{
            //   borderBottomWidth: 2,
            //   borderBottomColor: COLORS.green,
            //   width: 200,
            // }}
            value={group}
            placeholder="Group name"
            onChangeText={text => setGroupName(text)}
          />
          <Block
            style={{
              borderBottomWidth: 2,
              borderBottomColor: COLORS.green,
              width: 200,
            }}></Block>
        </Block>

        <Block style={{marginTop: 60}}>
          <TouchableOpacity onPress={() => handleCreateGroup()}>
            <AntDesign
              name="plus"
              size={24}
              color="#0F1828"
              // style={{marginLeft: 8}}
            />
          </TouchableOpacity>
        </Block>
      </Block>
      {newData && newData.length ? (
        <Block
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Block
            style={{
              borderTopWidth: 1,
              borderTopColor: COLORS.gray,
              marginTop: 10,
              padding: 20,
            }}>
            <FlatList
              data={newData}
              renderItem={renderItem1}
              numColumns={3}
              // showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
            />
          </Block>
        </Block>
      ) : null}
    </>
  );
};

export default SelectedGroupContact;
