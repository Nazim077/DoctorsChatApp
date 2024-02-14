import {View, Text, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const NewScreen2 = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>NewScreen2</Text>
      <Button
        title="BACK HOME"
        onPress={() => navigation.navigate('NewScreen')}
      />
    </View>
  );
};

export default NewScreen2;
