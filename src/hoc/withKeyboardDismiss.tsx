import React, {ComponentType} from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

const withKeyboardDismiss = (WrappedComponent: ComponentType<object>) => (
  props: object,
) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView behavior="padding">
      <WrappedComponent {...props} />
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
);

export default withKeyboardDismiss;
