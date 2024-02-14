import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, FlatList, Image} from 'react-native';
import {Block} from 'galio-framework';
import {Ionicons} from 'react-native-vector-icons';

import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../../style/MessageStyle';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/Advard.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/Krusty.webp'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/Sylvester.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/Nazim.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/back.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

// const getUsers = async () => {
//   const userId = await AsyncStorage.getItem('USERID');
//   const email = await AsyncStorage.getItem('EMAIL');
//   const tempData = [];

//   firestore()
//     .collection('users')
//     .where('email', '!=', email)
//     .get()
//     .then(querySnapshot => {
//       querySnapshot.forEach(doc => {
//         const userData = {
//           email: doc.data().email || '', // Check if email property exists
//           image: {
//             name: doc.data().image?.name || '', // Check if image property exists
//             fileCopyUri: doc.data().image?.fileCopyUri || null,
//             size: doc.data().image?.size || 0,
//             type: doc.data().image?.type || '',
//             uri: doc.data().image?.uri || '',
//           },
//           mobile: doc.data().mobile || '', // Check if mobile property exists
//           name: doc.data().name || '', // Check if name property exists
//           password: doc.data().password || '', // Check if password property exists
//           userId: doc.data().userId || '', // Check if userId property exists
//         };

//         tempData.push(userData);
//       });

//       setUser(tempData);
//     })
//     .catch(error => {
//       console.error('Error fetching user data: ', error);
//     });
// };

const MessagesScreen = ({navigation}) => {
  const [user, setUser] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const userId = await AsyncStorage.getItem('USERID');
    const email = await AsyncStorage.getItem('EMAIL');
    const tempData = [];

    firestore()
      .collection('users')
      .where('email', '!=', email)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const userData = {
            email: doc.data().email || '', // Check if email property exists
            image: {
              name: doc.data().image?.name || '', // Check if image property exists
              fileCopyUri: doc.data().image?.fileCopyUri || null,
              size: doc.data().image?.size || 0,
              type: doc.data().image?.type || '',
              uri: doc.data().image?.uri || '',
            },
            mobile: doc.data().mobile || '', // Check if mobile property exists
            name: doc.data().name || '', // Check if name property exists
            password: doc.data().password || '', // Check if password property exists
            userId: doc.data().userId || '', // Check if userId property exists
          };

          tempData.push(userData);
        });

        setUser(tempData);
      })
      .catch(error => {
        console.error('Error fetching user data: ', error);
      });
  };

  console.warn('user', user[0]?.image?.uri);

  return (
    <Container>
      <FlatList
        data={Messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card
            onPress={() => navigation.navigate('Demo', {data: item, id: id})}>
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <PostTime>{item.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </Container>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
