import React from 'react';
import {Platform} from 'react-native';

import {Input} from '../Styled';

interface Props {
  onChangeText: (text: string) => void;
  value: string;
}

const InputField = ({onChangeText, value}: Props) => (
  <Input
    onChangeText={(text: string) => onChangeText(text)}
    value={value}
    autoCorrect={false}
    autoCapitalize="none"
    returnKeyType="done"
    keyboardType={Platform.OS === 'android' ? 'visible-password' : undefined}
    enablesReturnKeyAutomatically
  />
);

export default InputField;
