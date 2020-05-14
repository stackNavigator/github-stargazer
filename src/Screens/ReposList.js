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
    stargazers_count: '123455'
  },
  {
    id: '2',
    full_name: 'vuejs/vue',
    stargazers_count: '100043'
  },
  {
    id: '3',
    full_name: 'rubygarage/truemail',
    stargazers_count: '1002'
  }
]

const ReposList = () => {
  return (
    <>
      {data
        ? (
          <FlatList
            data={data}
            renderItem={({ item: { full_name, stargazers_count } }) => {
              const Component = withNamedNavigation(
                () => <ListItem leftCaption={full_name} rightCaption={parseInt(stargazers_count).toLocaleString()} />,
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