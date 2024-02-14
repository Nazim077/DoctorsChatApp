import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
// import Background from './Background';
import {COLORS} from '../Component/Constant/Color';
// import Field from '../Screen/';
import Button from '../Component/Button';
// import auth from '@react-native-firebase/auth';
// import uuid from 'react-native-uuid';
// import firestore from '@react-native-firebase/firestore';
import {ScrollView} from 'native-base';
import DocumentPicker from 'react-native-document-picker';
import Toast from 'react-native-simple-toast';

const SignupScreen = props => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');

  const imgPic = async () => {
    try {
      const doc = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });
      // console.warn(doc);
      setImage(doc);
    } catch (err) {
      console.log(err);
    }

    console.warn(doc);
  };
  console.warn('image', image);

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
  //       image: image,
  //       userId: userId,
  //     })
  //     .then(res => {
  //       // console.warn('user created');
  //       Toast.showWithGravity(
  //         'Registered successfully',
  //         Toast.SHORT,
  //         Toast.CENTER,
  //       );
  //       props.navigation.navigate('LoginScreen');
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
          Register
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 400,
            borderTopLeftRadius: 100,
            paddingTop: 80,
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
              marginBottom: 10,
            }}>
            {' '}
            Register to your account
          </Text>
          {/* <Field
            placeholder="Name"
            keyboardType={'text'}
            value={name}
            onChangeText={text => setName(text)}
          /> */}
          {/* <Field
            placeholder="Email"
            keyboardType={'email-address'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Field
            placeholder="Mobile"
            keyboardType={'numeric'}
            value={mobile}
            onChangeText={text => setMobile(text)}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          /> */}
          <TouchableOpacity
            onPress={() => imgPic()}
            style={{
              color: COLORS.bottomTab,
              borderRadius: 100,
              paddingHorizontal: 10,
              width: '80%',
              backgroundColor: 'rgb(220,220,220)',
              marginVertical: 10,
              paddingLeft: 20,
            }}>
            <Text style={{fontSize: 18}}>Upload Image</Text>
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
                marginBottom: 40,
              }}>
              {' '}
              forgot password ?
            </Text>
            <Button
              textColor={'white'}
              backColor={COLORS.button}
              btnLevel={'Signup'}
              Press={() => {
                // RegisterUser();
                // alert('Account is created');
                // props.navigation.navigate('LoginScreen');
              }}
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
                Allready have an account ?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('LoginScreen')}>
                <Text
                  style={{
                    color: COLORS.theme,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    // </Background>
  );
};

export default SignupScreen;
