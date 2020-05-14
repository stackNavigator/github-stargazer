import React from 'react'

import InputField from '../components/InputField'
import ErrorMessage from '../UI/ErrorMessage'
import AddRepoButton from '../components/AddRepoButton'
import { TopView } from '../Styled'

const error = true

const AddRepo = () => {
  return (
    <TopView>
      <InputField />
      {error && <ErrorMessage caption="Repository not found" />}
      <AddRepoButton />
    </TopView>
  )
}

export default AddRepo