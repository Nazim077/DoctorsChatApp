import {View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import PageContainer from '../../Component/PageContainer';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../../Component/Input';
import Button from '../../Component/Button';
import DocumentPicker from 'react-native-document-picker';

const ProfileAccount = ({navigation}) => {
  const [image, setImage] = useState('');

  const imgPic = async () => {
    try {
      const doc = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      // console.warn(doc);
      setImage(doc.uri);
    } catch (err) {
      console.log(err);
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
                  source={{uri: image}}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    resizeMode: 'contain',
                  }}
                />
              ) : (
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
            <Input id="firstName" placeholder="First Name (Required) " />
            <Input id="lastName" placeholder="Last Name (Optional) " />

            <Button
              title="Save"
              style={{
                width: '100%',
                paddingVertical: 12,
                marginBottom: 48,
              }}
              onPress={() => navigation.navigate('MainStack')}
            />
          </View>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default ProfileAccount;
