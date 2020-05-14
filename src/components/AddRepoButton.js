import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { ConfirmButton, InfoText } from '../Styled'

const AddRepoButton = () => {
  const { goBack } = useNavigation()
  return (
    <ConfirmButton onPress={goBack}>
      <InfoText color="#fff">Add</InfoText>
    </ConfirmButton>
  )
}

export default AddRepoButton