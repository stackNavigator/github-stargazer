import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {observer} from 'mobx-react';

import ListItem from '../components/ListItem';
import PlaceholderView from '../UI/PlaceholderView';
import {StoreContext} from '../hoc/withStore';
import {ItemSeparator} from '../Styled';
import {IStore} from '../store';

const ReposList = observer(() => {
  const store: IStore = useContext(StoreContext);
  return (
    <>
      {store.sortedRepos.length ? (
        <FlatList
          data={store.sortedRepos}
          renderItem={({item: {full_name = '', stars}}) => (
            <ListItem
              leftCaption={full_name}
              rightCaption={stars.toLocaleString()}
            />
          )}
          ItemSeparatorComponent={() => <ItemSeparator />}
          ListFooterComponent={() => <ItemSeparator />}
        />
      ) : (
        <PlaceholderView placeholderText="No repositories added" />
      )}
    </>
  );
});

export default ReposList;
