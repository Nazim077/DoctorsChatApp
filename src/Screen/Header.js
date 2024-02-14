import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {newTheme} from '../constants/newTheme';
import {Block} from 'galio-framework';
import {StatusBar} from 'native-base';
const Header = ({navigation, item, groups , setGroups}) => {
    const {name, img, member, id} = item;
    // const {GroupList} = groupList;
    console.warn('item', id);
    console.warn('grpff', groups);
    return (
      <Block style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={()=> navigation.pop()}>
          <AntDesign name="arrowleft" size={25} color={newTheme.colors.white} />
        </TouchableOpacity>
        <Block style={styles.profileOptions}>
          <TouchableOpacity style={styles.profile} >
            <Image style={styles.image} source={{ uri : img}} />
            <Block style={styles.userNameAndOnlineStatus}>
                <TouchableOpacity
                 onPress={()=> navigation.navigate('PlainStack',{screen : 'GroupInfo', params : {item : item , groups : groups, setGroups : setGroups}})}
                //  onPress={() => navigation.navigate('PlainStack',{screen : 'GroupInfo' ,params : {item : item, groups :  groups, setGroups : setGroups}} )
                 >
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.onlineStatus}> online</Text>
              </TouchableOpacity>
            </Block>
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

  export default Header

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
      resizeMode : "contain"
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
      marginTop : 10
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