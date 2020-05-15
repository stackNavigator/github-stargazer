import { takeEvery } from 'redux-saga/effects'

import { GET_REPO, GET_REPO_LANGUAGES } from '../actions/action-types'
import { getRepo, getRepoLanguages } from './repos'

export default function* watchRepos() {
  yield takeEvery(GET_REPO, getRepo)
  yield takeEvery(GET_REPO_LANGUAGES, getRepoLanguages)
}