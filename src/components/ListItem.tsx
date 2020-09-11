import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import Swipeout from 'react-native-swipeout';

import {StoreContext} from '../hoc/withStore';
import {ListItemView, InfoText} from '../Styled';
import {IStore} from '../store';

const ListItem = ({leftCaption, rightCaption}) => {
  const {navigate} = useNavigation();
  const store: IStore = useContext(StoreContext);
  return (
    <Swipeout
      right={[
        {
          text: 'Delete',
          backgroundColor: 'red',
          underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
          onPress: () => store.removeRepo(leftCaption),
        },
      ]}
      autoClose={true}
      backgroundColor="transparent">
      <ListItemView
        onPress={() => navigate('RepoDetails', {name: leftCaption})}>
        <InfoText>{leftCaption}</InfoText>
        <InfoText>{rightCaption}</InfoText>
      </ListItemView>
    </Swipeout>
  );
};

export default ListItem;
