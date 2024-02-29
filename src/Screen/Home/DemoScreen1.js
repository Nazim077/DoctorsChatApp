import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import PageContainer from '../../Component/PageContainer';
import {COLORS, FONTS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {contacts} from '../../constants/data';
import {Block} from 'galio-framework';
import {newTheme} from '../../constants/newTheme';
const {width, height} = Dimensions.get('screen');
import { StatusBar } from 'native-base';

const DemoScreen1 = ({navigation}) => {
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
        //   onPress={() =>
        //     navigation.navigate('PlainStack', {
        //       screen: 'MessageScreen',
        //       params: {item: item},
        //     })
        //   }
        className ='bg-gray-200 flex-row items-center mx-2 mt-2  px-3 rounded-tl-full rounded-bl-full'
        key={index}
        style={[
          {
            // width: '100%',
            // flexDirection: 'row',
            // alignItems: 'center',
            // paddingHorizontal: 13,
            //   borderBottomColor: newTheme.colors.danger,
            //   borderBottomWidth: 1,
            //   borderRadius : 10 ,
            // borderTopLeftRadius: 50,
            // borderBottomLeftRadius: 50,
            // borderTopRightRadius: 10,
            // borderBottomRightRadius: 10,
            // marginTop: 10,
            // marginHorizontal: 11,
            // width: width * 0.94,
            // height : height * 0.07,
            elevation: 2,
            //   paddingVertical : 12
          },
          // index % 2 !== 0
          //   ? {
          //       backgroundColor: COLORS.tertiaryWhite,
          //     }
          //   : {
          //       backgroundColor: COLORS.tertiaryWhite,  //#d1d5db
          //     },
        ]}>
        <Block
        className= 'py-2 mr-6'
          // style={{
          //   // paddingVertical: 7,
          //   // marginRight: 22,
          //   //   marginVertical : 20
          // }}
          >
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
          <Text style={{...FONTS.h6, marginBottom: 4}}>{item.userName}</Text>
          <Text style={{fontSize: 14, color: COLORS.black}}>
            {item.lastSeen}
          </Text>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    // <SafeAreaView style={{flex: 1}}>
    //   <PageContainer>
    //   <StatusBar backgroundColor="#365486" barStyle="light-content" />
    //     <Block style={{flex: 1}}>
    //   <Block style={{backgroundColor : '#365486',
    //     // borderBottomRightRadius : 80
    //     }}> 
    //       <Block
    //         style={{
    //           flexDirection: 'row',
    //           justifyContent: 'space-between',
    //           alignItems: 'center',
    //           marginHorizontal: 22,
    //           marginTop: 22,
    //           // borderBottomWidth : 1,
    //           // borderBottomColor : 'black'
    //           // backgroundColor : '#365486' ,
    //           // height : 25
    //         }}>
    //         <Text
    //           style={{...FONTS.h5}}
    //           // style={{fontSize : 22, color : COLORS.secondaryBlack, fontWeight : '600' }}
    //         >
    //           Messages
    //         </Text>
    //         {/* <TouchableOpacity
    //               // onPress={() => handleCreateGroup()}
    //               onPress={() =>
    //                 navigation.navigate('SelectedGroupContact', {item: selectedContacts})
    //               }>
    //               <AntDesign name="plus" size={20} color="#0F1828" />
    //             </TouchableOpacity> */}
    //       </Block>
    //       <Block
    //         style={{
    //           marginHorizontal: 22,
    //           flexDirection: 'row',
    //           alignItems: 'center',
    //           backgroundColor: COLORS.secondaryWhite,
    //           height: 48,
    //           marginVertical: 22,
    //           paddingHorizontal: 12,
    //           borderRadius: 20,
    //         }}>
    //         <Ionicons name="search-outline" size={24} color={COLORS.black} />
    //         <TextInput
    //           style={{
    //             width: '100%',
    //             height: '100%',
    //             marginHorizontal: 12,
    //           }}
    //           value={search}
    //           onChangeText={handleSearch}
    //           placeholder="Search contact..."
    //         />
    //       </Block>
    //     </Block>
    //       {/* <Block style={{position: 'absolute', top: 120, right : 30}}>
    //           <AntDesign name="pluscircle" size={40} color="green" />
    //         </Block> */}
    //       {/* <Block style={{ borderTopLeftRadius : 48, borderTopRightRadius : 48}}>  */}
    //       <Block style={{paddingBottom: 140, height: height * 0.8}}>
    //         <FlatList
    //           data={filteredUsers}
    //           renderItem={renderItem}
    //           keyExtractor={item => item.id.toString()}
    //         />
    //          <TouchableOpacity
    //          onPress={()=> console.warn('clicked')}
    //         style={{
    //           position: 'absolute',
    //           bottom: 160,
    //           right: 20,
    //           zIndex: 1000,
    //           height : 60,
    //           width : 60,
    //           borderRadius : 40,
    //           backgroundColor : '#365486',
    //           elevation : 5
             
    //            // Set a higher z-index to make sure it appears above FlatList items
    //         }}>
    //         <AntDesign name="plus" size={25} color= 'white' style={{top : 16, left : 18}}/>
    //       </TouchableOpacity>
    //       </Block>
    //       </Block>
    //     {/* </Block> */}
    //   </PageContainer>
    // </SafeAreaView>
   
    <Block className="flex-1">
        <StatusBar  backgroundColor={'#1e293b'}/>
        {/* {backgroundColor = bg-slate-800} */}
      <Block className="bg-slate-800 py-2 px-2 flex-[0.2] w-full"> 
        <Block className="flex-row items-center justify-between  px-3 py-7 w-full">
          <TouchableOpacity
            onPress={() => console.warn('clicked')}
            style={{
              width: 45,
              justifyContent: 'center',
              aspectRatio: 1,
              alignItems: 'center',
              borderRadius: 15,
              backgroundColor: '#334155',
            }}>
            <MaterialIcons name="tune" size={20} color={'white'} />
          </TouchableOpacity>
          <Text className= 'text-3xl text-white font-bold'> Messages </Text>
          <Block className="flex-row items-center justify-center space-x-3">
            {/* <Image
              source={require('../../assets/Nazim.jpg')}
              className="w-11 h-11 rounded-3xl"
              resizeMode="contain"
            /> */}
            <TouchableOpacity
              onPress={() => console.warn('clicked')}
              style={{
                width: 45,
                justifyContent: 'center',
                aspectRatio: 1,
                alignItems: 'center',
                borderRadius: 15,
                backgroundColor: '#334155',
              }}>
              <MaterialIcons name="search" size={20} color={'white'} />
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
      <Block className="bg-white px-4 py-1 rounded-3xl flex-1 rounded-t-[50px] -mt-10 mb-20">
        <FlatList
          data={filteredUsers}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </Block>
    </Block>
  );
};

export default DemoScreen1;
