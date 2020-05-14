import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ReposList = () => {
  const { navigate } = useNavigation()
  return <TouchableOpacity onPress={() => navigate('RepoDetails', { name: 'Custom name' })}>
    <Text>Check details</Text>
  </TouchableOpacity>
}

export default ReposList