import {View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import PageContainer from '../../Component/PageContainer';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../../Component/Input';
import Button from '../../Component/Button';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import Toast from 'react-native-simple-toast'
import Config from '../../utils/config';

const ProfileAccount = ({navigation, route}) => {
  let number = route.params.number;
  console.warn('number', number);
  const [image, setImage] = useState('');
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
  });

  const handleChange = (type, value) => {
    let obj = {...profile};
    obj[type] = value;
    setProfile(obj);
  };

  const imgPic = async () => {
    try {
      const doc = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      // console.warn(doc);
      setImage(doc);
    } catch (err) {
      console.log(err);
    }
  };

  const createProfile = async () => {
    try {
      const payload = new FormData();
      payload.append('profile', image);
      payload.append('firstName', profile.firstName);
      payload.append('lastName', profile.lastName);
      payload.append('mobile', number);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data', // Specify the content type for FormData
          // Add any other headers as needed
          // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Example of an Authorization header
        },
      };
      debugger;

      const response = await axios.post(
        `${Config.apiBaseUrl}/api/users`,
        payload,config
      );
      debugger
      console.log('response', response);
      if (response.status === 201) {
      Toast.showWithGravity('profile created successfully',Toast.SHORT, Toast.CENTER)
        navigation.navigate('MainStack');
      }
    } catch (error) {
      debugger;
      console.log('err', error);
    }
  };

  console.warn('image', image);

  return (
    <SafeAreaView style={{flex: 1}}>
      <PageContainer>
        <TouchableOpacity
          // onPress={props.onPress}
          onPress={() => navigation.pop()}
          style={{
            marginLeft: 10,
            marginTop: 20,
          }}>
          <AntDesign
            name="arrowleft"
            // size={SIZES.padding * 3}
            size={24}
            color="gray"
            // color={COLORS.black}
          />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity onPress={() => imgPic()}>
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: COLORS.secondaryWhite,
                borderRadius: 50,
                marginVertical: 48,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {image ? (
                <Image
                  source={{uri: image.uri}}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    resizeMode: 'contain',
                  }}
                />
              ) 
               : ( 
                <AntDesign name="user" size={64} color={COLORS.black} />
              )} 

              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                }}>
                <AntDesign name="pluscircle" size={24} color={COLORS.black} />
              </View>
            </View>
          </TouchableOpacity>

          <View style={{width: '100%', paddingHorizontal: 22}}>
            <Input
              placeholder="First Name (Required) "
              value={profile.firstName}
              onChange={e => handleChange('firstName', e.nativeEvent.text)}
            />
            <Input
              placeholder="Last Name (Optional) "
              value={profile.lastName}
              onChange={e => handleChange('lastName', e.nativeEvent.text)}
            />

            <Button
              title="Save"
              style={{
                width: '100%',
                paddingVertical: 12,
                marginBottom: 48,
              }}
              onPress={() => createProfile()}
            />
          </View>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default ProfileAccount;
