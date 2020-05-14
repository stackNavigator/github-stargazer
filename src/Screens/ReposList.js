import React from 'react'
import { FlatList } from 'react-native'

import ListItem from '../UI/ListItem'
import PlaceholderView from '../UI/PlaceholderView'
import { ItemSeparator } from '../Styled'

const data = [
  {
    id: '1',
    full_name: 'facebook/react',
    stars: '123455'
  },
  {
    id: '2',
    full_name: 'rubygarage/truemail',
    stars: '1002'
  },
  {
    id: '3',
    full_name: 'vuejs/vue',
    stars: '100043'
  }
]

const ReposList = () => {
  const sortedData = data.sort((a, b) => b.stars - a.stars)
  return (
    <>
      {data
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