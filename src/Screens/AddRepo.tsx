import React, {useEffect, useContext} from 'react';
import {ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';

import InputField from '../UI/InputField';
import ErrorMessage from '../UI/ErrorMessage';
import AddRepoButton from '../UI/AddRepoButton';
import validate from '../validation/validate';
import withKeyboardDismiss from '../hoc/withKeyboardDismiss';
import {StoreContext} from '../hoc/withStore';
import {TopView} from '../Styled';
import {IStore} from '../store';

const AddRepo = observer(() => {
  const {goBack} = useNavigation();
  const store: IStore = useContext(StoreContext);
  useEffect(() => {
    if (store.repoWasAdded) {
      store.clearRepoAddition();
      goBack();
    }
    return () => store.clearRepoName();
  }, [store.repoWasAdded, store, goBack]);
  return (
    <TopView>
      {store.loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <InputField
            value={store.repoName}
            onChangeText={text => store.changeRepoName(text)}
          />
          {store.error && <ErrorMessage caption="Repository not found" />}
          <AddRepoButton
            onPress={() =>
              validate(store.repoName) && store.getRepo(store.repoName)
            }
          />
        </>
      )}
    </TopView>
  );
});

export default withKeyboardDismiss(AddRepo);
