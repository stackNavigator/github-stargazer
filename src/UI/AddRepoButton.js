import React from 'react'

import { ConfirmButton, InfoText } from '../Styled'

const AddRepoButton = ({ onPress }) => (
  <ConfirmButton onPress={onPress}>
    <InfoText color="#fff">Add</InfoText>
  </ConfirmButton>
)

export default AddRepoButton