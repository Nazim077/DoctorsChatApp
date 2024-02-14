import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ChatHeader from '../../Component/message/ChatHeader';
import ChatInput from '../../Component/message/ChatInput';
// import MessagesList from '../Component/message/MessagesList'
import {newTheme} from '../../constants/newTheme';
import {Block} from 'galio-framework';
import {create} from 'react-test-renderer';
import {StatusBar} from 'native-base';

const MessageScreen = ({navigation, route}) => {
  let item = route.params.item;
  console.warn('item', route.params.item);
  const {userName, userImg} = route.params.item;
  console.warn('list', userName, userImg);
  const [reply, setReply] = useState('');
  const [isLeft, setIsLeft] = useState();

  const swipeToReply = (message, isLeft) => {
    setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
    setIsLeft(isLeft);
  };

  const closeReply = () => {
    setReply('');
  };

  return (
    <Block
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <StatusBar backgroundColor="#003153" barStyle="light-content" />
      <Header item={item} navigation={navigation} />
      <Block
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 10,
        }}>
        <ChatInput
          reply={reply}
          isLeft={isLeft}
          closeReply={closeReply}
          userName={userName}
        />
      </Block>
    </Block>
  );
};

const Header = ({navigation, item}) => {
  const {userImg, userName} = item;
  return (
    <Block style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.pop()}>
        <AntDesign name="arrowleft" size={25} color={newTheme.colors.white} />
      </TouchableOpacity>
      <Block style={styles.profileOptions}>
        <TouchableOpacity style={styles.profile}>
          <Image style={styles.image} source={userImg} />
          <TouchableOpacity 
          onPress={()=> navigation.navigate('PlainStack', { screen : 'ChatInfo', params : { userImg : userImg , userName : userName}})}
          >
          <Block style={styles.userNameAndOnlineStatus}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.onlineStatus}> </Text>
          </Block>
          </TouchableOpacity>
        </TouchableOpacity>
        <Block style={styles.options}>
          <TouchableOpacity
            // onPress={() => navigation.navigate("OnCallScreen", {
            // 	userName: userName,
            // 	userImg: userImg
            // })}
            style={{paddingHorizontal: 5}}>
            <MaterialIcons
              name="phone"
              size={25}
              color={newTheme.colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{paddingHorizontal: 20}}>
            <Ionicons
              name="ellipsis-vertical"
              size={25}
              color={newTheme.colors.white}
            />
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: newTheme.colors.primary,
    // backgroundColor : '#075e54',
    paddingTop: 20,
    paddingBottom: 10,
  },
  backButton: {
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  profileOptions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
    flex: 4,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  userNameAndOnlineStatus: {
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems : 'center' ,
    paddingHorizontal: 10,
  },
  userName: {
    color: newTheme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  onlineStatus: {
    color: newTheme.colors.white,
    fontSize: 14,
  },
  options: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default MessageScreen;
