import { takeEvery } from 'redux-saga/effects'

import { GET_REPO } from '../actions/action-types'
import { getRepo } from './repos'

export default function* watchRepos() {
  yield takeEvery(GET_REPO, getRepo)
}