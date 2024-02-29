import {View, Text, FlatList, Image, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Block} from 'galio-framework';
import {contacts, list} from '../../constants/data';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {AntDesign, MaterialIcons} from 'react-native-vector-icons'
const {width, height} = Dimensions.get('screen')

const NewScreen2 = ({navigation}) => {
  const [data, setData] = useState(contacts);
  const [item, setItem] = useState(list);
  const [pressed, setPressed] = useState(false);
  console.warn('data', data);
  // handle pressIn Function

  const handlePressIn = () => {
    setPressed(!pressed);
    console.warn('hello clicked function');
  };
  const renderItem = ({item}) => {
    return (
      <Block>
        <Block className="h-4 w-4 bg-green-600 rounded-full border-white border-[2px] top-[70px] left-14 z-[100px]"></Block>
        <Block className="py-2 px-0">
          <Image
            source={item.userImg}
            className="h-16 w-16 rounded-full mx-2"
          />
        </Block>
        <Block className="mx-4 px-1">
          <Text className="text-cyan-100">{item.userName}</Text>
        </Block>
      </Block>
    );
  };

  // user list data
  const renderList = ({item}) => {
    return (
      <Block className="flex-row justify-between">
        <Block className="py-2 px-0 ">
          <Image
            source={item.userImg}
            className="h-16 w-16 rounded-full mx-2"
          />
        </Block>
        <Block className="mt-3 mr-14">
          <Text className="text-black text-[18px]">{item.userName}</Text>
          <Text>{item.lastMessage}</Text>
        </Block>
        <Block className="mt-3 mr-2">
          <Text className="text-black text-[12px]">10:00 am</Text>
          <Block className= 'mt-1 ml-7 h-5 w-5 rounded-full bg-green-500 justify-center items-center'>
            <Text className='text-xs text-white'>{item.messageInQueue}</Text>
          </Block>
        </Block>
      </Block>
    );
  };
  return (
    <Block className="flex-1">
      <Block className=" bg-blue-400 py-10 px-6 w-full flex-[0.4]">
        <Block className="flex-col">
          <Text className="text-[15px] text-cyan-50">You Received </Text>
          <Text className="text-[20px] text-cyan-100 underline font-semibold mt-0">
            47 Messages
          </Text>
          <Text className="text-cyan-50 text-[15px] mt-4">Contact List</Text>
        </Block>
        <Block className="flex-row -mt-3">
          <FlatList
            data={item}
            renderItem={renderItem}
            // keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </Block>
      </Block>
      <Block className="bg-white px-4 py-1 rounded-3xl flex-1 rounded-t-[50px] -mt-10">
        <Block className="flex-row">
          <Block className="py-4 px-5">
            <MaterialIcons name="search" size={28} color={'black'} />
          </Block>
          <TouchableOpacity
            onPress={() => handlePressIn()}

          >
            {pressed ? (
              <Block
              style={{width : width * 0.45, height : height * 0.05}}
               className=" bg-blue-700 rounded-full  mt-3 justify-center items-center">
                <Text className="text-white text-[18px]">Direct Message</Text>
              </Block>
            ) : (
              <Block 
              style={{width : width * 0.45, height : height * 0.05}}
              className="bg-yellow-200 rounded-full   mt-3 justify-center items-center">
                <Text className="text-black text-[18px]">Direct Message</Text>
              </Block>
            )}
          </TouchableOpacity>
          <Block 
          style={{width : width * 0.26, height : height * 0.05}}
          className="bg-gray-400 rounded-full  mt-3 mx-3 justify-center items-center">
            <Text className="text-black text-[18px]">Group</Text>
          </Block>
        </Block>
        <Block className="mb-36">
          <FlatList
            data={data}
            renderItem={renderList}
            showsVerticalScrollIndicator={false}
          />
        </Block>
        <Block className='h-12 w-12 bg-blue-700 rounded-full bottom-48 left-[270px] z-[400px] justify-center items-center relative'>
             <AntDesign 
             name='plus' size={22} color={'white'}
             /> 
        </Block>
      </Block>
    </Block>
  );
};

export default NewScreen2;
