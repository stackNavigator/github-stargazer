import React from 'react'
import { FlatList } from 'react-native'

import ListItem from '../UI/ListItem'
import PlaceholderView from '../UI/PlaceholderView'
import withNamedNavigation from '../hoc/withNamedNavigation'
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
  return (
    <>
      {data
        ? (
          <FlatList
            data={data}
            renderItem={({ item: { full_name, stars } }) => {
              const Component = withNamedNavigation(
                () => <ListItem leftCaption={full_name} rightCaption={parseInt(stars).toLocaleString()} />,
                'RepoDetails',
                full_name
              )
              return <Component />
            }}
            ItemSeparatorComponent={() => <ItemSeparator />}
            ListFooterComponent={() => <ItemSeparator />} />
        )
        : <PlaceholderView placeholderText="No repositories added" />}
    </>
  )
}

export default ReposList