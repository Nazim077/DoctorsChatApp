import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import PageContainer from '../../Component/PageContainer';
import {COLORS} from '../../constants/theme';
import {newTheme} from '../../constants/newTheme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Input from '../../Component/Input';
// import Button from '../../Component/Button';
import DocumentPicker from 'react-native-document-picker';
import {Block} from 'galio-framework';
import {contacts} from '../../constants/data';
const {width, height} = Dimensions.get('screen');

const ChatInfo = ({navigation, route}) => {
  console.warn('items', route.params);
  const {userName, userImg} = route.params;
  const [image, setImage] = useState('');
  const [newData, setNewData] = useState(contacts);

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

  const renderItem1 = ({item}) => (
    <Block style={{margin: 4, padding: 10}}>
      <TouchableOpacity>
        <Image
          source={item.userImg}
          resizeMode="contain"
          style={{
            height: 100,
            width: 100,
            borderRadius: 13,
          }}
        />
      </TouchableOpacity>
    </Block>
  );


  console.warn('image', image);

  return (
    <SafeAreaView style={{flex: 1}}>
        {/* <PageContainer> */}
        <Block
          style={{
            backgroundColor: newTheme.colors.white,
            height: height * 0.35,
            borderBottomWidth: 0.2,
            borderBottomColor: newTheme.colors.primary,
            elevation: 8,
          }}>
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
          <Block style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => imgPic()}>
              <Block
                style={{
                  width: 120,
                  height: 120,
                  backgroundColor: COLORS.secondaryWhite,
                  borderRadius: 100,
                  // marginVertical: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {image ? (
                  <Image
                    source={{uri: image}}
                    style={{
                      width: 150,
                      height: 150,
                      borderRadius: 100,
                      resizeMode: 'contain',
                    }}
                  />
                ) : (
                  // <AntDesign name="user" size={64} color={COLORS.black} />
                  <Image
                    source={userImg}
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: 100,
                      resizeMode: 'contain',
                    }}
                  />
                )}

                <Block
                  style={{
                    position: 'absolute',
                    bottom: 1,
                    right: 14,
                  }}>
                  <AntDesign name="pluscircle" size={26} color={COLORS.green} />
                </Block>
              </Block>
            </TouchableOpacity>

            <Block
              style={{
                width: '100%',
                flex: 1,
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  color: newTheme.colors.primary,
                  fontWeight: '500',
                }}>
                {userName}
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  color: newTheme.colors.primary,
                  fontWeight: '400',
                }}>
                +91 17505-699-221
              </Text>
            </Block>
          </Block>
        </Block>
        <Block
          style={{
            marginVertical: 8,
            backgroundColor: newTheme.colors.white,
            height: height * 0.18,
            borderBottomWidth: 0.2,
            borderBottomColor: 'gray',
            elevation: 4,
          }}>
          <Text style={{fontWeight: '500', marginLeft: 13}}>
            media , links and docs
          </Text>
          <Block style={{flexDirection: 'row'}}>
            <FlatList
              data={newData}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem1}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </Block>
        </Block>

        <Block
          style={{
            marginVertical: 2,
            backgroundColor: newTheme.colors.white,
            height: height * 0.15,
            borderBottomWidth: 0.2,
            borderBottomColor: 'gray',
            elevation: 3,
          }}>
            <MaterialCommunityIcons name="bell" size={20} color="gray" />
          <Text style={{fontWeight: '500', marginLeft: 13}}>
            Mute notifications
          </Text>
        </Block>
        <Block
          style={{
            marginVertical: 2,
            backgroundColor: newTheme.colors.white,
            height: height * 0.15,
            borderBottomWidth: 0.2,
            borderBottomColor: 'gray',
            elevation: 3,
          }}>
            <MaterialCommunityIcons name="bell" size={20} color="gray" />
          <Text style={{fontWeight: '500', marginLeft: 13}}>
            Mute notifications
          </Text>
        </Block>
        <Block
          style={{
            marginVertical: 2,
            backgroundColor: newTheme.colors.white,
            height: height * 0.15,
            borderBottomWidth: 0.2,
            borderBottomColor: 'gray',
            elevation: 3,
          }}>
            <MaterialCommunityIcons name="bell" size={20} color="gray" />
          <Text style={{fontWeight: '500', marginLeft: 13}}>
            Mute notifications
          </Text>
        </Block>
        {/* </PageContainer> */}
    </SafeAreaView>
  );
};

export default ChatInfo;
