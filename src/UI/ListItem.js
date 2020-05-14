import React from 'react'
import { Text } from 'react-native'

import { ListItemView, ListItemText } from '../Styled'

const ListItem = ({ leftCaption, rightCaption }) => (
  <ListItemView>
    <ListItemText>{leftCaption}</ListItemText>
    <ListItemText>{rightCaption}</ListItemText>
  </ListItemView>
)

export default ListItem