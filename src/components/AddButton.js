import React from 'react'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { AddActionButton } from '../Styled'

const AddButton = () => {
  const { navigate } = useNavigation()
  return (
    <AddActionButton onPress={() => navigate('AddRepo')}>+</AddActionButton>
  )
}

export default AddButton