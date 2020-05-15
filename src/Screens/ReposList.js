import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import ListItem from '../components/ListItem'
import PlaceholderView from '../UI/PlaceholderView'
import { ItemSeparator } from '../Styled'

const ReposList = () => {
  const data = useSelector(({ repoReducer: { repos } }) => repos)
  const sortedData = data.sort((a, b) => b.stars - a.stars)
  return (
    <>
      {data.length
        ? (
          <FlatList
            data={sortedData}
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