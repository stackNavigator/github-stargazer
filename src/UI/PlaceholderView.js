import React from 'react'
import { Text } from 'react-native'

import { CenteredView } from '../Styled'

const PlaceholderView = ({ placeholderText }) => (
  <CenteredView>
    <Text>{placeholderText}</Text>
  </CenteredView>
)

export default PlaceholderView