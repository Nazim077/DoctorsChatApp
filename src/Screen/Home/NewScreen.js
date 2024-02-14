import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {styles} from '../App';
// import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ListItem, Avatar} from 'react-native-elements';
import {COLORS} from '../../Component/Constant/Color';
import {FONTS} from '../../Component/Constant/Font';
let id = '';
const NewScreen = ({navigation}) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  // const logoutUser = async () => {
  //   try {
  //     await AsyncStorage.removeItem('Name');
  //     await AsyncStorage.removeItem('EMAIL');
  //     await AsyncStorage.removeItem('USERID');
  //     navigation.navigate('Signup'); // or navigate to your login screen
  //   } catch (error) {
  //     console.warn('Error removing data:', error);
  //     Alert.alert('Error removing data');
  //   }
  // };

  // const getUsers = async () => {
  //   id = await AsyncStorage.getItem('USERID');
  //   let tempData = [];
  //   const email = await AsyncStorage.getItem('EMAIL');
  //   firestore()
  //     .collection('users')
  //     .where('email', '!=', email)
  //     .get()
  //     .then(res => {
  //       // console.warn(JSON.stringify(res.docs[0].data()));
  //       if (res.docs.length > 0) {
  //         res.docs.map(item => {
  //           tempData.push(item.data());
  //           // tempData.push(item.data());
  //         });
  //       }
  //       // console.warn('temp', tempData);
  //       setUser(tempData);
  //     });
  // };

  const getUsers = async () => {
    const userId = await AsyncStorage.getItem('USERID');
    const email = await AsyncStorage.getItem('EMAIL');
    const tempData = [];

    // firestore()
    //   .collection('users')
    //   .where('email', '!=', email)
    //   .get()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       const userData = {
    //         email: doc.data().email || '', // Check if email property exists
    //         image: {
    //           name: doc.data().image?.name || '', // Check if image property exists
    //           fileCopyUri: doc.data().image?.fileCopyUri || null,
    //           size: doc.data().image?.size || 0,
    //           type: doc.data().image?.type || '',
    //           uri: doc.data().image?.uri || '',
    //         },
    //         mobile: doc.data().mobile || '', // Check if mobile property exists
    //         name: doc.data().name || '', // Check if name property exists
    //         password: doc.data().password || '', // Check if password property exists
    //         userId: doc.data().userId || '', // Check if userId property exists
    //       };

    //       tempData.push(userData);
    //     });

    //     setUser(tempData);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching user data: ', error);
    //   });
  };

  //
  console.warn('user333', user);
  // console.warn('123', user);
  return (
    <View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.name}>Hello Nazim</Text>
        <Image source={require('../../assets/Nazim.jpg')} style={styles.img} />
        <Button
          title="GO Next"
          onPress={() => navigation.navigate('NewScreen2')}
        />

        <FlatList
          data={user}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Demo', {data: item, id: id});
                }}>
                <View style={styles.input}>
                  <Image
                    source={require('../../assets/user.png')}
                    style={{width: 50, height: 50}}
                  />
                  <Text
                    style={{
                      marginLeft: 180,
                      marginTop: -30,
                      fontSize: 18,
                      fontWeight: '500',
                    }}>
                    {' '}
                    {item?.name}{' '}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <Text> mmaxxx </Text>
        <TouchableOpacity onPress={() => logoutUser}>
          <View style={styles.input}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: '#21409A',
                paddingLeft: 120,
              }}>
              {' '}
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    margin: 12,
  },
  flexs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'blue',
    width: 350,
    margin: 10,
    padding: 12,
    borderRadius: 12,
  },
  name: {
    fontSize: 18,
    color: '#21409A',
    fontWeight: '400',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default NewScreen;
