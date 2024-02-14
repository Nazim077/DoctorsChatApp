import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
// import Background from './Background';
import {COLORS} from '../Component/Constant/Color';
// import Field from './Field';
import Button from '../Component/Button';
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {ScrollView} from 'native-base';
// import Toast from 'react-native-simple-toast';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // const loginUser = () => {
  //   firestore()
  //     .collection('users')
  //     .where('email', '==', email)
  //     .get()
  //     .then(res => {
  //       // Check if there are any documents in the result
  //       if (res.docs.length > 0) {
  //         // Use the first document's data
  //         // console.warn(JSON.stringify(res.docs[0].data()));
  //         gotoNext(
  //           res.docs[0].data().name,
  //           res.docs[0].data().email,
  //           res.docs[0].data().userId,
  //         );
  //       } else {
  //         Alert.alert('User not Found');
  //       }
  //     })
  //     .catch(err => {
  //       console.warn('err', err);
  //       Alert.alert('Error fetching user');
  //     });
  // };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // const gotoNext = async (name, email, userId) => {
  //   // Use try-catch for better error handling
  //   try {
  //     await AsyncStorage.setItem('Name', name);
  //     await AsyncStorage.setItem('EMAIL', email);
  //     await AsyncStorage.setItem('USERID', userId);
  //     // Alert.alert('Login Successfully');
  //     Toast.showWithGravity('login successfully', Toast.SHORT, Toast.CENTER);
  //     props.navigation.navigate('UserTabSatck');
  //   } catch (error) {
  //     console.warn('Error storing data:', error);
  //     Alert.alert('Error storing data');
  //   }
  // };
  return (
    // <Background>
      <View style={{alignItems: 'center', width: 400}}>
        <Text
          style={{
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold',
            marginVertical: 30,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 400,
            borderTopLeftRadius: 100,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{color: COLORS.theme, fontSize: 40, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontWeight: 'bold',
              color: 'gray',
              marginBottom: 20,
            }}>
            {' '}
            Login to your account
          </Text>
          {/* <Field
            placeholder="Email"
            keyboardType={'email-address'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Field
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={text => setPassword(text)}
          /> */}
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              color="#21409A"
            />
          </TouchableOpacity>

          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 10,

              //   marginBottom: 160,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: COLORS.theme,
                marginBottom: 120,
              }}>
              {' '}
              forgot password ?
            </Text>
            <Button
              textColor={'white'}
              backColor={COLORS.button}
              btnLevel={'Login'}
              Press={() =>
                //  alert('Logged in ')
                loginUser()
              }
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingRight: 18,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: COLORS.button,
                }}>
                {' '}
                Don't have an account ?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('SignupScreen')}>
                <Text
                  style={{
                    color: COLORS.theme,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    // </Background>
  );
};

export default LoginScreen;
