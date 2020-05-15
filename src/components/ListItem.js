import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { } from 'react-redux'
import Swipeout from 'react-native-swipeout'

import { ListItemView, InfoText } from '../Styled'

const ListItem = ({ leftCaption, rightCaption }) => {
  const { navigate } = useNavigation()
  return (
    <Swipeout right={[{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => alert('Works!')
    }]}
    autoClose={true}
    backgroundColor="transparent" >
      <ListItemView onPress={() => navigate('RepoDetails', { name: leftCaption })}>
        <InfoText>{leftCaption}</InfoText>
        <InfoText>{rightCaption}</InfoText>
      </ListItemView>
    </Swipeout>
  )
}

export default ListItem