import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Block} from 'galio-framework';
import {COLORS, FONTS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InitialCreateGroup = ({navigation}) => {
  return (
    <Block>
      <Block
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 22,
          marginTop: 300,
          width: 350,
          height: 60,
          paddingHorizontal: 30,
          backgroundColor: '#C9D7DD',
          borderRadius: 22,
        }}>
        <Text style={{...FONTS.h4}}>Create Group</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
          <AntDesign name="plus" size={25} color="#0F1828" />
        </TouchableOpacity>
      </Block>
      <Block
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 22,
          marginTop: 40,
          width: 350,
          height: 60,
          paddingHorizontal: 30,
          backgroundColor: '#C9D7DD',
          borderRadius: 22,
        }}>
        <Text style={{...FONTS.h4}}>Direct Chat</Text>
        <TouchableOpacity onPress={() => console.warn('called')}>
          <AntDesign name="plus" size={25} color="#0F1828" />
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default InitialCreateGroup;

// import React, {useState} from 'react';
// import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {contacts} from '../constants/data';
// import {COLORS, FONTS} from '../constants/theme';
// import {Block} from 'galio-framework';

// const InitialCreateGroup = () => {
//   const [newData, setNewData] = useState(contacts);
//   // Dummy data
//   // const [data , setData] = useState([
//   //   { id: '1', text: 'Item 1', name: 'nazim' },
//   //   { id: '2', text: 'Item 2', name: 'Aasif' },
//   //   { id: '3', text: 'Item 3', name: 'Altab' },
//   //   { id: '4', text: 'Item 4', name: 'Yasir' },
//   //   { id: '5', text: 'Item 5', name: 'Majid' },
//   //   { id: '6', text: 'Item 6', name: 'Raqib' },
//   //   { id: '7', text: 'Item 7', name: 'Zoya' },
//   //   // Add more items as needed
//   // ]);

//   // const renderItem = ({item, index}) => {
//   //   const contactID = item.id;

//   //   return (
//   //     <TouchableOpacity
//   //       onPress={() => removeItem(item.id)}
//   //       key={index}
//   //       style={[
//   //         {
//   //           width: '100%',
//   //           flexDirection: 'row',
//   //           alignItems: 'center',
//   //           paddingHorizontal: 2,
//   //           borderBottomColor: COLORS.secondaryWhite,
//   //           borderBottomWidth: 1,
//   //         },
//   //         index % 2 !== 0
//   //           ? {
//   //               backgroundColor: COLORS.tertiaryWhite,
//   //             }
//   //           : null,
//   //       ]}>
//   //       <Block
//   //         style={{
//   //           paddingVertical: 15,
//   //           marginRight: 22,
//   //         }}>

//   //         {/* {item.isOnline && item.isOnline === true && (
//   //           <Block
//   //             style={{
//   //               height: 14,
//   //               width: 14,
//   //               borderRadius: 7,
//   //               backgroundColor: COLORS.green,
//   //               borderColor: COLORS.white,
//   //               borderWidth: 2,
//   //               position: 'absolute',
//   //               top: 14,
//   //               right: 2,
//   //               zIndex: 1000,
//   //             }}>

//   //             </Block>
//   //         )} */}
//   //        <Ionicons name="close-circle" size={24} color="red" />
//   //         <Image
//   //           source={item.userImg}
//   //           resizeMode="contain"
//   //           style={{
//   //             height: 50,
//   //             width: 50,
//   //             borderRadius: 25,
//   //           }}
//   //         />

//   //       </Block>
//   //       <Block
//   //         style={{
//   //           flexDirection: 'column',
//   //         }}>
//   //         <Text style={{...FONTS.h4, marginBottom: 4}}>{item.userName}</Text>
//   //       </Block>

//   //     </TouchableOpacity>
//   //   );
//   // };

//   const removeItem = itemId => {
//     const updatedData = newData.filter(item => item.id !== itemId);
//     setNewData(updatedData);
//   };
//   // Render item function for FlatList
//   const renderItem = ({item}) => (
//     <Block style={{margin: 4, padding: 12}}>
//       <Image
//         source={item.userImg}
//         resizeMode="contain"
//         style={{
//           height: 50,
//           width: 50,
//           borderRadius: 25,
//         }}
//       />
//       <Ionicons
//         name="close-circle"
//         size={20}
//         color={COLORS.green}
//         style={{
//           position: 'absolute',
//           // bottom: 0,
//           // right: 0,
//           left: 48,
//           top: 39,
//           width: 22,
//           height: 22,
//           backgroundColor: COLORS.white,
//           borderRadius: 10,
//           // padding: 0.5,
//         }}
//       />
//       <Block
//         style={{
//           flexDirection: 'column',
//         }}>
//         <Text style={{...FONTS.h4, marginBottom: 4}}>{item.userName}</Text>
//       </Block>
//       <TouchableOpacity onPress={() => removeItem(item.id)}></TouchableOpacity>
//     </Block>
//   );

//   return (
//     <Block>
//       <Block style={{ borderBottomWidth: 1, borderBottomColor : COLORS.gray}}>
//         <FlatList
//           data={newData}
//           keyExtractor={item => item.id}
//           renderItem={renderItem}
//           horizontal={true}
//           showsHorizontalScrollIndicator = {false}
//         />
//       </Block>
//     </Block>
//   );
// };

// export default InitialCreateGroup;
