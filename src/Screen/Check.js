import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
// import {Button} from 'react-native-elements';
// import {WebView} from 'react-native-webview';
import DocumentPicker, {types} from 'react-native-document-picker';
import Toast from 'react-native-simple-toast';
import {Block, Button} from 'galio-framework';
import {ScrollView, StatusBar} from 'native-base';
import {create} from 'react-test-renderer';
import SplashScreen from './SplashScreen';

const Check = ({navigation}) => {
  debugger;
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
  };

  return (
    <Block>
      <Block style={{padding: 10}} space="between">
        <Text style={styles.text}> Enjoy The</Text>
        <Text style={styles.text}> Convenience of </Text>
        <Text style={styles.text1}> Communicating </Text>
        <Text style={styles.text}> With Doctor's </Text>
        <Text style={{fontSize: 18, color: 'gray', padding: 9}}>
          {' '}
          Easy and free, you can get all here.{' '}
        </Text>
      </Block>
      {/* <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      /> */}
      <Block center style={{marginBottom: 400}}>
        {/* <Image
          source={require('../assets/img2.png')}
          style={{width: 380, height: 300, borderRadius: 12}}
        /> */}
        <SplashScreen />
      </Block>
      <Block style={{marginTop: -370}}>
        <Block center>
          <Button
            style={styles.Button1}
            color="orange"
            onPress={() => navigation.navigate('PhoneNumber')}>
            <Text style={styles.buttonText}> Get Started</Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: '700',
    color: 'black',
    fontFamily: '',
  },
  text1: {
    fontSize: 40,
    fontWeight: '700',
    color: 'orange',
  },
  Button1: {
    borderRadius: 40,
    width: 330,
    height: 70,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },
});

export default Check;
