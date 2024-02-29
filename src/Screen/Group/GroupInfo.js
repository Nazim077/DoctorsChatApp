import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
  Modal,
  TextInput,
  Dimensions,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS} from '../../constants/theme';
import {contacts} from '../../constants/data';
import DocumentPicker from 'react-native-document-picker';

// import ChatHeader from '../Component/message/ChatHeader';
// import ChatInput from '../Component/message/ChatInput';
// import MessagesList from '../Component/message/MessagesList'
// import Header from '../Screen/Header'
import {newTheme} from '../../constants/newTheme';
import {Block} from 'galio-framework';
const {width , height} = Dimensions.get('screen')

const GroupInfo = ({navigation, route}) => {
  const item = route.params.item;
  const {groups} = route.params;
  const {setGroups} = route.params;
  console.warn('new list', route.params.groups);
  const {name, img, member, id} = item;
  // console.warn('item2', name, img, member, id);
  const [filteredUsers, setFilteredUsers] = useState(member);
  const [newData, setNewData] = useState(contacts);
  const [image, setImage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState(name);
  // const [groupList, setGroupList] = useState(GroupList)
  // console.warn('newName', newName);
  //   let item = route.params.item;
  //   console.warn('item', route.params.item);
  //   const {name, img} = route.params.item;
  //   console.warn('list', name, img);
  //   const [reply, setReply] = useState('');
  //   const [isLeft, setIsLeft] = useState();

  //   const swipeToReply = (message, isLeft) => {
  //     setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
  //     setIsLeft(isLeft);
  //   };

  //   const closeReply = () => {
  //     setReply('');
  //   };

  // useEffect(() => {
  //   if (item  && item.length)
  //   setFilteredUsers(item);
  //   debugger;
  // }, []);

  const handleSelectContact = item => {
    console.warn('item', item);
  };

  const isSelected = id => {
    return filteredUsers.some(contact => contact.id === id);
  };

  const renderItem1 = ({item}) => (
    <Block style={{margin: 4, padding: 10}}>
      <TouchableOpacity>
        <Image
          source={item.userImg}
          resizeMode="contain"
          style={{
            height: 100,
            width: 100,
            borderRadius: 13,
          }}
        />
        {/* <Block
        style={{
          flexDirection: 'column',
        }}>
        <Text style={{...FONTS.h4, marginBottom: 4}}>{item.userName}</Text>
      </Block> */}
      </TouchableOpacity>
    </Block>
  );

  const renderItem = ({item, index}) => {
    const contactID = item.id;

    return (
      <TouchableOpacity
        // onPress={() => handleSelectContact(item)}
        key={index}
        style={[
          {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 22,
            borderBottomColor: COLORS.secondaryWhite,
            borderBottomWidth: 1,
            padding: 10,
          },
          index % 2 !== 0
            ? {
                backgroundColor: COLORS.tertiaryWhite,
              }
            : null,
        ]}>
        <Block style={{flex: 1, flexDirection: 'row'}}>
          <Block>
            <Image
              source={item.userImg}
              resizeMode="contain"
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                // borderWidth: isSelected(contactID) ? 2 : 0, // Border width for selected contacts
                // borderColor: isSelected(contactID)
                //   ? COLORS.green
                //   : COLORS.transparent, // Border color for selected contacts
              }}
            />
          </Block>

          <Block
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
            }}>
            <Block>
              <Text style={{...FONTS.h4, marginBottom: 4}}>
                {item.userName}
              </Text>
            </Block>
            <TouchableOpacity onPress={() => RemoveItem(item.id)}>
              <Block>
                <MaterialIcons name="delete" size={20} color="red" />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };

  const RemoveItem = id => {
    // console.warn('function called', item);
    const arr = filteredUsers.filter(item => item.id !== id);

    setFilteredUsers(arr);
  };

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

  console.warn('setfilter', filteredUsers);

  const handleEdit = () => {
    setModalVisible(true);
  };

  const handleSave = newName => {
    setNewName(newName);
  };

  console.warn('newName', newName);
  return (
    <Block
      style={{
        flex: 1,
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      {/* <StatusBar backgroundColor="#003153" barStyle="light-content" /> */}
      <ScrollView>
      <Block
        style={{
          backgroundColor: newTheme.colors.white,
          height: height * 0.35,
          borderBottomWidth: 0.2,
          borderBottomColor: newTheme.colors.primary,
          elevation: 8,
        }}>
        <TouchableOpacity
          // onPress={props.onPress}
          onPress={() => navigation.pop()}
          style={{
            marginLeft: 10,
            marginTop: 20,
          }}>
          <AntDesign
            name="arrowleft"
            // size={SIZES.padding * 3}
            size={24}
            color="gray"
            // color={COLORS.black}
          />
        </TouchableOpacity>
        <Block style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity onPress={() => imgPic()}>
            <Block
              style={{
                width: 120,
                height: 120,
                backgroundColor: COLORS.secondaryWhite,
                borderRadius: 100,
                // marginVertical: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {image ? (
                <Image
                  source={{uri: image}}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 100,
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                // <AntDesign name="user" size={64} color={COLORS.black} />
                <Image
                  source={{uri : img}}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 100,
                    resizeMode: 'contain',
                  }}
                />
              )}

              <Block
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 2,
                  height : 40,
                  width : 40,
                  backgroundColor : 'green',
                  borderRadius : 50
                }}>
                <FontAwesome
                    name="camera"
                    size={17}
                    color={newTheme.colors.white}
                    style={{top: 11, left: 11}}
                  />
              </Block>
            </Block>
          </TouchableOpacity>

          <Block
            style={{
              width: '100%',
              flex: 1,
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 24,
                color: newTheme.colors.primary,
                fontWeight: '500',
              }}>
              {name}
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: newTheme.colors.primary,
                fontWeight: '400',
              }}>
            Group . {filteredUsers.length} members
            </Text>
           
          </Block>
        </Block>
      </Block>
        {/* <Block style={styles.container}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.pop()}>
            <AntDesign
              name="arrowleft"
              size={24}
              color={newTheme.colors.primary}
            />
          </TouchableOpacity>
          <Block style={styles.profileOptions}>
            <TouchableOpacity style={styles.profile}>
              {image ? (
                <Image source={{uri: image}} style={styles.image} />
              ) : (
                <Image source={{uri: img}} style={styles.image} />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => imgPic()}>
              <Block style={{top: 40, right: 40}}>
                <Block
                  style={{
                    height: 42,
                    width: 42,
                    borderRadius: 60,
                    backgroundColor: 'green',
                  }}>
                  <FontAwesome
                    name="camera"
                    size={19}
                    color={newTheme.colors.white}
                    style={{top: 11, left: 11}}
                  />
                </Block>
              </Block>
            </TouchableOpacity>
          </Block>
          <Block
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 110,
              marginTop: 50,
            }}>
            <Text style={styles.userName}>{newName}</Text>
          </Block>
          <TouchableOpacity onPress={() => handleEdit()}>
            <Block style={{top: 160, left: 20}}>
              <FontAwesome name="pencil" size={20} color="green" />
            </Block>
          </TouchableOpacity>
          <EditNameModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            onSave={handleSave}
            name={newName}
          />
          <Block
            style={{
              // justifyContent: 'start',
              // alignItems: 'center',
              // paddingLeft: 110,
              // justifyContent : 'flex-end'
              position: 'absolute',
              top: 205,
              left: 120,
            }}>
            <Text style={styles.member}>
              {' '}
              Group . {filteredUsers.length} members
            </Text>
          </Block>
        </Block> */}

        <Block style={styles.mediaContainer}>
          <Text style={{fontWeight: '500', marginLeft: 13}}>
            media , links and docs
          </Text>
          <Block style={{flexDirection: 'row'}}>
            <FlatList
              data={newData}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem1}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </Block>
        </Block>
        <Block
          style={{
            marginTop: 5,
            // borderTopWidth: 0.2,
            // borderTopColor: 'darkgray',
            borderBottomWidth: 0.2,
            borderBottomColor: 'darkgray',
            elevation: 2,
          }}>
          <Block
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 22,
              marginTop: 22,
              // height : 25
            }}>
            <Text style={styles.member}>{filteredUsers.length} members</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('PlainStack', {screen: 'MemberList'})
              }>
              <MaterialIcons name="person-add-alt-1" size={22} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={() => handleCreateGroup()}
            // onPress={() =>
            //   navigation.navigate('SelectedGroupContact', {item: selectedContacts})
            // }
            >
              <Ionicons name="search-outline" size={22} color={COLORS.black} />
            </TouchableOpacity>
          </Block>
          <Block style={{paddingBottom: 2}}>
            <FlatList
              data={filteredUsers}
              renderItem={renderItem}
              // numColumns={3}
              keyExtractor={item => item.id.toString()}
            />
          </Block>
        </Block>
        <TouchableOpacity onPress={() => DeleteGroup(item)}>
          <Block
            style={{
              marginTop: 7,
              borderTopWidth: 0.2,
              borderTopColor: 'darkgray',
              height: 150,
              backgroundColor: newTheme.colors.white,
              flexDirection: 'row',
              paddingBottom: 60,
            }}>
            <MaterialIcons
              name="delete"
              size={24}
              color="red"
              style={{marginLeft: 20, marginTop: 10}}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                marginTop: 10,
                marginHorizontal: 20,
              }}>
              Delete Group
            </Text>
          </Block>
        </TouchableOpacity>
        {/* <Header item={item} navigation={navigation} /> */}
        {/* <ChatInput
        reply={reply}
        isLeft={isLeft}
        closeReply={closeReply}
        userName={userName}
      /> */}
      </ScrollView>
    </Block>
  );
};

const testFun = () => {
  console.warn('new member is added');
};

const DeleteGroup = item => {
  const arr = groups.filter(product => product.id !== item.id);
  setGroups(arr);
  // console.warn('deleted group', item.id)
  // const arr =
};

const EditNameModal = ({visible, onClose, onSave, name}) => {
  const [editedName, setEditedName] = useState(name);

  const handleSave = () => {
    onSave(editedName);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide-up" transparent={true}>
      <Block style={styles.modalContainer}>
        <Block style={styles.modalContent}>
          <TextInput
            style={styles.textInput}
            value={editedName}
            onChangeText={setEditedName}
            placeholder="Enter new name"
          />
          <Block style={styles.buttonContainer}>
            <TouchableOpacity style={styles.iconButton} onPress={handleSave}>
              <FontAwesome name="save" size={24} color="green" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={onClose}>
              <FontAwesome name="times-circle" size={24} color="red" />
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </Modal>
  );
};

// const Header = ({navigation, item}) => {
//   const {name, img} = item;
//   return (
//     <Block style={styles.container}>
//       <TouchableOpacity
//         style={styles.backButton}
//         onPress={() => navigation.pop()}>
//         <AntDesign name="arrowleft" size={25} color={newTheme.colors.white} />
//       </TouchableOpacity>
//       <Block style={styles.profileOptions}>
//         <TouchableOpacity style={styles.profile} >
//           <Image style={styles.image} source={{ uri : img}} />
//           <Block style={styles.userNameAndOnlineStatus}>
//             <Text style={styles.userName}>{name}</Text>
//             <Text style={styles.onlineStatus}> online</Text>
//           </Block>
//         </TouchableOpacity>
//         <Block style={styles.options}>
//           <TouchableOpacity
//             // onPress={() => navigation.navigate("OnCallScreen", {
//             // 	userName: userName,
//             // 	userImg: userImg
//             // })}
//             style={{paddingHorizontal: 5}}>
//             <MaterialIcons
//               name="phone"
//               size={25}
//               color={newTheme.colors.white}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity style={{paddingHorizontal: 20}}>
//             <Ionicons
//               name="ellipsis-vertical"
//               size={25}
//               color={newTheme.colors.white}
//             />
//           </TouchableOpacity>
//         </Block>
//       </Block>
//     </Block>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: newTheme.colors.white,
    marginTop: 1,
    // backgroundColor : '#075e54',
    paddingTop: 20,
    paddingBottom: 10,
    height: 300,
    borderBottomWidth: 0.2,
    borderBottomColor: 'darkgray',
    elevation: 3,
  },
  backButton: {
    alignSelf: 'center',
    paddingHorizontal: 10,
    position: 'absolute',
    top: 20,
  },
  profileOptions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
    // marginBottom: 160
    position: 'absolute',
    left: 120,
    top: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
    justifyContent: 'center',
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 80,
    resizeMode: 'contain',
  },
  mediaContainer: {
    marginTop: 10,
    // borderTopWidth: 0.4,
    // borderTopColor: 'darkgray',
    borderBottomWidth: 0.2,
    borderBottomColor: 'darkgray',
    // flexDirection: 'row',
    backgroundColor: newTheme.colors.white,
    height: 150,
    elevation: 3,
  },
  userNameAndOnlineStatus: {
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems : 'center' ,
    paddingHorizontal: 10,
  },
  userName: {
    color: newTheme.colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    // alignItems : 'center',
    // justifyContent : 'center'
  },
  member: {
    color: newTheme.colors.primary,
    fontSize: 18,
    fontWeight: '400',
    // lineHeight : 25.8
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconButton: {
    marginLeft: 20,
  },
});

export default GroupInfo;
