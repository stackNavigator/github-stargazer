import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import PlaceholderView from '../UI/PlaceholderView'

const data = false

const ReposList = () => {
  const { navigate } = useNavigation()
  return (
    <>
      {data
        ? (
          <TouchableOpacity onPress={() => navigate('RepoDetails', { name: 'Custom name' })}>
            <Text>Check for details</Text>
          </TouchableOpacity>
        )
        : <PlaceholderView placeholderText="No repositories added" />}
    </>
  )
}

export default ReposList