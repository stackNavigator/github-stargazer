import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import Swipeout from 'react-native-swipeout'

import { removeRepo } from '../store/actions/repos'

import { ListItemView, InfoText } from '../Styled'

const ListItem = ({ leftCaption, rightCaption }) => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  return (
    <Swipeout right={[{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => dispatch(removeRepo(leftCaption))
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