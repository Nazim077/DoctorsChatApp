import React from 'react';
import {KeyboardAvoidingView, Dimensions} from 'react-native';
import {Platform} from 'react-native';
import {COLORS} from '../constants/theme';

const PageContainer = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'android' ? 'padding' : ''}
      style={{
        height: '100%' ,
        width: '100%',
        backgroundColor: COLORS.white,
      }}>
      {props.children}
    </KeyboardAvoidingView>
  );
};

export default PageContainer;
