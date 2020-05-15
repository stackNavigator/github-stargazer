import React from 'react'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import repoReducer from '../store/reducers/repo'
import repoNameReducer from '../store/reducers/repo-name'
import watchRepos from '../store/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers({ repoReducer, repoNameReducer }),
  applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchRepos)
const withRedux = AppComponent => () => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
)

export default withRedux