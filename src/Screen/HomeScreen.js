import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
// import Background from './Background';
import {COLORS} from '../Component/Constant/Color';
import Button from '../Component/Button'
// import {ScrollView} from 'native-base';
const HomeScreen = props => {
  debugger;
  return (
   // <Background>
      <View style={{marginHorizontal: 40, marginVertical: 60}}>
        <Text style={styles.mainText}>Let's start</Text>
        <Text style={styles.secondaryText}>Chatting</Text>
        <Button
          backColor={COLORS.button}
          textColor={COLORS.lightgray}
          btnLevel={'Login'}
          Press={() => props.navigation.navigate('LoginScreen')}
        />
        {/* <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} /> */}
        <Button
          backColor={COLORS.bottomTab}
          textColor={COLORS.cream}
          btnLevel={'Signup'}
          Press={() => props.navigation.navigate('SignupScreen')}
        />
        {/* </TouchableOpacity> */}
      </View>
    // {/* </Background> */}
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  mainText: {
    color: 'white',
    fontSize: 64,
    fontWeight: '500',
  },
  secondaryText: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 100,
  },
});

export default HomeScreen;
