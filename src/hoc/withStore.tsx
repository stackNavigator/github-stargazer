import React, {createContext} from 'react';
import {IStore} from '../store';

export let StoreContext: React.Context<IStore> = {
  Provider: null,
  Consumer: null,
};

export default (store, Component) => {
  StoreContext = createContext(store);
  return () => (
    <StoreContext.Provider value={store}>
      <Component />
    </StoreContext.Provider>
  );
};
