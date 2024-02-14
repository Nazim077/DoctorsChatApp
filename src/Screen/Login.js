import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import auth from '@react-native-firebase/auth';
// import auth from '@react-native-firebase/auth';
// import {firebase} from '@react-native-firebase/app';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const HandleUser = async () => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      console.warn('response', response);
      if (response && response.user) {
        navigation.navigate('Demo', {
          email: response.user.email,
          uid: response.user.uid,
        });
      }
    } catch (error) {
      console.warn('err', error);
    }
  };

  // const HandleSubmit = (type, value) => {
  //   let newObj = {...userDetail};
  //   newObj[type] = value;
  //   setUserDetails(newObj);

  //   // console.warn('called');
  // };
  // console.warn(userDetail.email, '', userDetail.password);

  // const SaveData = async () => {
  //   if (!name) {
  //     setNameError(true);
  //   } else {
  //     setNameError(false);
  //   }
  //   if (!age) {
  //     setAgeError(true);
  //   } else {
  //     setAgeError(false);
  //   }
  //   if (!email) {
  //     setEmailError(true);
  //   } else {
  //     setEmailError(false);
  //   }
  //   if (!name || !age || !email) {
  //     return false;
  //   }
  //   console.warn('next');

  //   console.warn(name, age, email);
  //   const url = 'http://192.168.1.36:3000/Users';
  //   let result = await fetch(url, {
  //     method: 'POST',
  //     headers: {'Content-type': 'application/json'},
  //     body: JSON.stringify({name, age, email}),
  //   });
  //   final = await result.json();
  //   if (final) {
  //     console.warn('Data is Added');
  //     getAPIData();
  //   }
  // };

  return (
    <View style={styles.flexs}>
      <ScrollView>
        <View style={styles.flexContainer}>
          {/* <TextInput
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Enter Your Name"
            style={styles.input}
          />
          {emailError ? (
            <Text style={styles.inputText}> Please Enter Valid Email </Text>
          ) : null} */}
          <TextInput
            value={email}
            placeholder="enter email here"
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            value={password}
            placeholder="enter password here"
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            style={styles.input}
          />
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={HandleUser} style={{marginTop: 30}}>
              <Text style={styles.button}> Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'blue',
    width: 350,
    margin: 10,
    padding: 12,
    borderRadius: 12,
  },
  flexs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: 'blue',
    width: 166,
    fontWeight: '500',
    margin: 10,
    padding: 12,
    borderRadius: 12,
    color: '#fff',
    backgroundColor: 'blue',
    fontSize: 23,
    textAlign: 'center',
  },
  inputText: {
    fontSize: 15,
    color: 'red',
    margin: 5,
  },
  flexContainer: {
    borderWidth: 1,
    borderRadius: 12,
    height: 300,
    marginTop: 10,
    padding: 5,
    backgroundColor: 'pink',
  },
});
export default Login;
