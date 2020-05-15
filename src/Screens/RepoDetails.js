import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

import { getRepoLanguages } from '../store/actions/repos'

import Details from '../UI/Details'
import { DetailsContainer } from '../Styled'

const RepoDetails = () => {
  const { params: { name } } = useRoute()
  const repo = useSelector(({ repoReducer: { repos } }) => repos)
    .find(({ full_name }) => full_name === name)
  const languages = useSelector(({ repoReducer: { languages } }) => languages)
  const loading = useSelector(({ repoReducer: { loading } }) => loading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRepoLanguages(name))
  }, [])
  const { id, full_name, ...stats } = repo
  const localizedStats = Object.entries(stats).reduce((acc, [key, value]) => ({
    ...acc,
    [key]: parseInt(value).toLocaleString()
  }), {})
  return (
    <DetailsContainer>
      <Details headerCaption="Stats" mainInfo={localizedStats} />
      {loading
        ? <ActivityIndicator />
        : <Details headerCaption="Languages"
          mainInfo={languages[name]} />}
    </DetailsContainer>
  )
}

export default RepoDetails