import React, { useEffect, useContext } from 'react'
import { ActivityIndicator } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { observer } from 'mobx-react'

import Details from '../UI/Details'
import { StoreContext } from '../hoc/withStore'
import { DetailsContainer } from '../Styled'

const RepoDetails = observer(() => {
  const { params: { name } } = useRoute()
  const store = useContext(StoreContext)
  useEffect(() => {
    store.localizeRepoStats(name)
    store.getRepoLanguages(name)
  }, [])
  return (
    <DetailsContainer>
      <Details headerCaption="Stats" mainInfo={store.stats} />
      {store.loading
        ? <ActivityIndicator />
        : <Details headerCaption="Languages"
          mainInfo={store.languages[name]} />}
    </DetailsContainer>
  )
})

export default RepoDetails