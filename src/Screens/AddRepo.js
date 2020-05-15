import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

import { changeRepoName, clearRepoName, getRepo, clearRepoAddition } from '../store/actions/repos'

import InputField from '../UI/InputField'
import ErrorMessage from '../UI/ErrorMessage'
import AddRepoButton from '../UI/AddRepoButton'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import validate from '../validation/validate'
import { TopView } from '../Styled'

const AddRepo = () => {
  const repoNameValue = useSelector(({ repoNameReducer: { repoNameValue } }) => repoNameValue)
  const repoWasAdded = useSelector(({ repoReducer: { repoWasAdded } }) => repoWasAdded)
  const loading = useSelector(({ repoReducer: { loading } }) => loading)
  const error = useSelector(({ repoReducer: { error } }) => error)
  const dispatch = useDispatch()
  const { goBack } = useNavigation()
  useEffect(() => {
    if (repoWasAdded) {
      dispatch(clearRepoAddition())
      goBack()
    }
    return () => dispatch(clearRepoName())
  }, [repoWasAdded])
  return (
    <TopView>
      {loading
        ? <ActivityIndicator />
        : (
          <>
            <InputField
              value={repoNameValue}
              onChangeText={text => dispatch(changeRepoName(text))} />
            {error && <ErrorMessage caption="Repository not found" />}
            <AddRepoButton onPress={() => validate(repoNameValue) && dispatch(getRepo(repoNameValue))} />
          </>
        )}
    </TopView>
  )
}

export default withKeyboardDismiss(AddRepo)