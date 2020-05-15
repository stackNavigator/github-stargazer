import React from 'react'
import { Platform } from 'react-native'

import { Input } from '../Styled'

// Crazy hack with visible password for Android devices.
const InputField = ({ onChangeText, value }) => (
  <Input
    onChangeText={text => onChangeText(text)}
    value={value}
    autoCorrect={false}
    autoCapitalize="none"
    returnKeyType="done"
    keyboardType={Platform.OS === 'android' ? 'visible-password' : undefined}
    enablesReturnKeyAutomatically />
)

export default InputField