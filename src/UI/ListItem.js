import React from 'react'

import { ListItemView, InfoText } from '../Styled'

const ListItem = ({ leftCaption, rightCaption }) => (
  <ListItemView>
    <InfoText>{leftCaption}</InfoText>
    <InfoText>{rightCaption}</InfoText>
  </ListItemView>
)

export default ListItem