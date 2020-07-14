import React, { createContext } from 'react'

export let StoreContext

export default (store, Component) => {
  StoreContext = createContext(store)
  return () => (
    <StoreContext.Provider value={store}>
      <Component />
    </StoreContext.Provider>
  )
}