import React, { useEffect, useContext, useMemo } from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { observer } from 'mobx-react'

import Details from '../UI/Details'
import { StoreContext } from '../hoc/withStore'

const RepoDetails = observer(() => {
  const { params: { name } } = useRoute()
  const store = useContext(StoreContext)
  useEffect(() => {
    store.localizeRepoStats(name)
    store.getRepoLanguages(name)
  }, [name]);
  return (
    <ScrollView>
      <Details headerCaption="Stats" mainInfo={store.stats} />
      {store.loading
        ? <ActivityIndicator />
        : <Details headerCaption="Languages"
          mainInfo={store.languages[name]} />}
    </ScrollView>
  )
})

export default RepoDetails