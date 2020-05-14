import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default (Component, routeName, screenTitle) => props => {
  const { navigate } = useNavigation(routeName, { name: screenTitle })
  return (
    <TouchableOpacity onPress={() => navigate(routeName, { name: screenTitle })}>
      <Component {...props} />
    </TouchableOpacity>
  )
}