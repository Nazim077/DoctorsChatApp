import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import PageContainer from '../../Component/PageContainer';
import {COLORS, FONTS} from '../../constants/theme';
// import OTPTextInput from 'react-native-otp-textinput';
import Button from '../../Component/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import {Block} from 'galio-framework';
const {width, height} = Dimensions.get('screen');
import Toast from 'react-native-simple-toast';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Config from '../../utils/config';
// import PageTitle from '../components/PageTitle'

const Verification = ({navigation, route}) => {
  let number = route.params.number;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 6});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  // const [otpValue, setOtpValue] = useState(['', '', '', '', '', '']);
  /*  const [otpValue, setOtpValue] = useState('');
  let number = route.params.number;
  console.warn('number', number);
  const inputRefs = useRef([]);
  const MAX_DIGITS = 6;

  const setText = otp => {
    inputRefs.current.setValue(otp);
    setOtpValue(otp);
  }; */

  // const clearText = () => {
  //   otpInput.current.clear();
  // };


  console.warn('otp value', value);

  const OtpVerified = async () => {
    try {
      let payload = {
        mobile: number,
        otp: value,
      };
      debugger;
      const response = await axios.post(
        `${Config.apiBaseUrl}/api/otp/verify`,
        payload,
      );
      if (response.data.Status === 'Success') {
        debugger;
        // console.warn('otp verified successfully');
        Toast.showWithGravity(
          'OTP Verified Successfully',
          Toast.SHORT,
          Toast.CENTER,
        );
        navigation.navigate('ProfileAccount', {number: number});
      } else if (response.data.Status === 'Error') {
        Toast.showWithGravity(
          'OTP does not matched',
          Toast.SHORT,
          Toast.CENTER,
        );
      } else {
        console.log('unexpected response error', response.status);
      }
    } catch (error) {
      debugger;
      console.log('err', error);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <PageContainer>
        {/* <PageTitle onPress={() => navigation.navigate('PhoneNumber')} /> */}
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
        <Block
          style={{
            flex: 1,
            alignItems: 'center',
            marginHorizontal: 22,
          }}>
          <Text style={{...FONTS.h2, marginTop: 48, marginBottom: 22}}>
            Enter Verification Code
          </Text>
          <Text style={{...FONTS.body3, textAlign: 'center'}}>
            We have sent you an SMS with the code
          </Text>
          <Text style={{...FONTS.body3, textAlign: 'center'}}>
            {' '}
            to +62 {number}
          </Text>
          <Block style={{marginVertical: 60}}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={6}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <View
                  // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[styles.cellRoot, isFocused && styles.focusCell]}>
                  <Text style={styles.cellText}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
          </Block>
          <Block width={width * 0.75} style={{marginVertical: 20}}>
            <Button
              title="Resend code"
              disabled
              // onPress={() => OtpVerified()}
              style={{
                width: '100%',
                paddingVertical: 12,
                // marginBottom: 48,
              }}
            />
          </Block>
          <Block width={width * 0.75}>
            <Button
              title="Verified"
              // disabled
              onPress={() => OtpVerified()}
              style={{
                width: '100%',
                paddingVertical: 12,
                marginBottom: 48,
              }}
            />
          </Block>
        </Block>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 30,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
});

export default Verification;
