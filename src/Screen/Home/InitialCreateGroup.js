import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {Block} from 'galio-framework';
import {COLORS, FONTS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styled} from 'nativewind';
import {contacts} from '../../constants/data';

const InitialCreateGroup = ({navigation}) => {
  const [filteredUsers, setFilteredUsers] = useState(contacts);

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
        key={index}
        style={[
          {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            //   borderBottomColor: newTheme.colors.danger,
            //   borderBottomWidth: 1,
            //   borderRadius : 10 ,
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 10,
            marginTop: 10,
            marginHorizontal: 11,
            width: '100%',
            elevation: 5,
            //   paddingVertical : 12
          },
          index % 2 !== 0
            ? {
                backgroundColor: '#98ABEE',
              }
            : {
                backgroundColor: '#98ABEE',
              },
          //   ? {
          //       backgroundColor: COLORS.secondary,
          //     }
          //   : {
          //     backgroundColor : COLORS.secondary,
          //   }
        ]}>
        <Block
          style={{
            paddingVertical: 10,
            marginRight: 22,
            //   marginVertical : 20
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
          <Text style={{...FONTS.h6, marginBottom: 4}}>{item.userName}</Text>
          <Text style={{fontSize: 14, color: COLORS.black}}>
            {item.lastSeen}
          </Text>
        </Block>
      </TouchableOpacity>
    );
  };
  return (
    <Block className="flex-1">
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
      <Block
        style={{
          justifyContent: 'space-evenly',
          marginVertical: 20,
          flexDirection: 'row',
        }}>
        <Block>
          <Text style={{...FONTS.h4}}>Demo Chatscreen --1</Text>
        </Block>
        <Block>
          <TouchableOpacity onPress={() => navigation.navigate('DemoScreen1')}>
            <AntDesign name="arrowright" size={25} color="#0F1828" />
          </TouchableOpacity>
        </Block>
      </Block>
      <Block
        style={{
          justifyContent: 'space-evenly',
          marginVertical: 20,
          flexDirection: 'row',
        }}>
        <Block>
          <Text style={{...FONTS.h4}}>Demo Groupscreen --2</Text>
        </Block>
        <Block>
          <TouchableOpacity onPress={() => navigation.navigate('DemoScreen2')}>
            <AntDesign name="arrowright" size={25} color="#0F1828" />
          </TouchableOpacity>
        </Block>
      </Block>
      <Block
        style={{
          justifyContent: 'space-evenly',
          marginVertical: 20,
          flexDirection: 'row',
        }}>
        <Block>
          <Text style={{...FONTS.h4}}>Contact List --3</Text>
        </Block>
        <Block>
          <TouchableOpacity onPress={() => navigation.navigate('DemoScreen3')}>
            <AntDesign name="arrowright" size={25} color="#0F1828" />
          </TouchableOpacity>
        </Block>
      </Block>
      <Block
        style={{
          justifyContent: 'space-evenly',
          marginVertical: 5,
          flexDirection: 'row',
        }}>
        <Block>
          <Text style={{...FONTS.h4}}>Group Screen</Text>
        </Block>
        <Block>
          <TouchableOpacity onPress={() => navigation.navigate('NewScreen2')}>
            <AntDesign name="arrowright" size={25} color="#0F1828" />
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
};

export default InitialCreateGroup;
