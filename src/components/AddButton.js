import React from 'react'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const AddButton = () => {
  const { navigate } = useNavigation()
  return <Button title="+" fontSize={30} onPress={() => navigate('AddRepo')} />
}

export default AddButton