import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import auth from '@react-native-firebase/auth';
// import auth from '@react-native-firebase/auth';
// import uuid from 'react-native-uuid';
// import firestore from '@react-native-firebase/firestore';
import {COLORS} from '../Component/Constant/Color';
import {FONTS} from '../Component/Constant/Font';
import {Block} from 'galio-framework';

const Singup = ({navigation}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // const RegisterUser = () => {
  //   const userId = uuid.v4();
  //   firestore()
  //     .collection('users')
  //     .doc(userId)
  //     .set({
  //       name: name,
  //       email: email,
  //       mobile: mobile,
  //       password: password,
  //       userId: userId,
  //     })
  //     .then(res => {
  //       console.warn('user created');
  //       navigation.navigate('Home');
  //     })
  //     .catch(err => {
  //       console.warn('err', err);
  //     });
  // };

  // const validate = () => {
  //   let isValid = true;

  //   if (
  //     name == '' &&
  //     mobile == '' &&
  //     email == '' &&
  //     confirmpassword == '' &&
  //     password == ''
  //   ) {
  //     isValid = false;
  //   } else if (password !== confirmpassword) {
  //     isValid = false;
  //   }
  // };
  // const HandleUser = async () => {
  //   try {
  //     const response = await auth().createUserWithEmailAndPassword(
  //       email,
  //       password,
  //     );
  //     console.warn('response', response);
  //     if (response && response.user) {
  //       navigation.navigate('Home');
  //     }
  //   } catch (error) {
  //     console.warn('err', error);
  //   }
  // };

  return (
    <Block style={styles.flexs}>
      <ScrollView>
        <View style={styles.flexContainer}>
          <TextInput
            value={name}
            placeholder="enter name"
            onChangeText={text => setName(text)}
            style={styles.input}
          />
          <TextInput
            value={mobile}
            keyboardType="numeric"
            placeholder="enter mobile"
            onChangeText={text => setMobile(text)}
            style={styles.input}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Enter Full Name"
            underlineColorAndroid="transparent"
            // onChangeText={value => setname(value)}
            value={name}
            placeholderTextColor={COLORS.liteBlack}
          />
          <TextInput
            value={email}
            placeholder="enter email"
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            value={password}
            placeholder="enter password "
            onChangeText={text => setPassword(text)}
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <TextInput
            value={confirmpassword}
            placeholder="enter confirm password"
            onChangeText={text => setConfirmPassword(text)}
            // secureTextEntry={!showPassword}
            style={styles.input}
          />
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => setShowPassword(!showPassword)}>
            <Text style={{marginLeft: 20}}>
              {showPassword ? 'Hide Password' : 'Show Password'}
            </Text>
          </TouchableOpacity>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                // RegisterUser();
                // if (validate()) {
                //   RegisterUser();
                // } else {
                //   Alert.alert('Please Enter Correct Data');
                // }
              }}
              style={{marginTop: 30}}>
              <Text style={styles.button}> Signup </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={{color: 'blue'}}>Already have an Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Block>
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
    color: 'blue',
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
    color: 'blue',
    margin: 5,
  },
  flexContainer: {
    borderWidth: 1,
    borderRadius: 12,
    height: 700,
    marginTop: 10,
    padding: 5,
    backgroundColor: 'pink',
    color: 'blue',
  },
  inputs: {
    borderBottomColor: COLORS.white,
    flex: 1,
    color: COLORS.liteBlack,
    paddingLeft: 10,
    fontFamily: FONTS.Regular,
  },
});
export default Singup;
