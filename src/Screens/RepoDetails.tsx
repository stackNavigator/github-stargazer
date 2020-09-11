import React, {useEffect, useContext} from 'react';
import {ScrollView, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {observer} from 'mobx-react';

import Details from '../UI/Details';
import {StoreContext} from '../hoc/withStore';
import {IStore} from '../store';

interface RepoDetailsRouteParams {
  params: {name: string};
}

const RepoDetails = observer(() => {
  const {
    params: {name},
  } = useRoute() as RepoDetailsRouteParams;
  const store: IStore = useContext(StoreContext);
  useEffect(() => {
    store.localizeRepoStats(name);
    store.getRepoLanguages(name);
  }, [name, store]);
  return (
    <ScrollView>
      <Details headerCaption="Stats" mainInfo={store.stats} />
      {store.loading ? (
        <ActivityIndicator />
      ) : (
        <Details headerCaption="Languages" mainInfo={store.languages[name]} />
      )}
    </ScrollView>
  );
});

export default RepoDetails;
