import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { sortRepos } from '../store/actions/repos'

import ListItem from '../components/ListItem'
import PlaceholderView from '../UI/PlaceholderView'
import { ItemSeparator } from '../Styled'

const ReposList = () => {
  const repos = useSelector(({ repoReducer: { repos } }) => repos)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(sortRepos(repos))
  }, [repos])
  return (
    <>
      {repos.length
        ? (
          <FlatList
            data={repos}
            renderItem={({ item: { full_name, stars } }) => (
              <ListItem leftCaption={full_name} rightCaption={parseInt(stars).toLocaleString()} />
            )}
            ItemSeparatorComponent={() => <ItemSeparator />}
            ListFooterComponent={() => <ItemSeparator />} />
        )
        : <PlaceholderView placeholderText="No repositories added" />}
    </>
  )
}

export default ReposList