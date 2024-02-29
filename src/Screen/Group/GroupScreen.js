import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import ChatHeader from '../Component/message/ChatHeader';
// import ChatInput from '../../Component/message/ChatInput';
// import ChatInput from '../Component/message/ChatInput';
// import MessagesList from '../Component/message/MessagesList'
import ChatInput from '../../Component/message/ChatInput';
import Header from '../Header';
import {newTheme} from '../../constants/newTheme';
import {Block} from 'galio-framework';
import {StatusBar} from 'native-base';

const GroupScreen = ({navigation, route}) => {
  let item = route.params.item;
  let {groups} = route.params;
  let setGroups = route.params.setGroups;
  console.warn('grp', groups);
  console.warn('itemlist', route.params.groups);
  const {name, img, member, id} = route.params.item;
  console.warn('list', name, img, member, id);
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
      <Header
        item={item}
        groups={groups}
        navigation={navigation}
        setGroups={setGroups}
      />
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
          userName={name}
        />
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
    resizeMode: 'contain',
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

export default GroupScreen;
