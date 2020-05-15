import { put } from 'redux-saga/effects'

import { getRepoStart, getRepoSuccess, getRepoFail } from '../actions/repos'
import { urlBase } from '../public-urls'

export function* getRepo({ repoName }) {
  yield put(getRepoStart())
  const blob = yield fetch(`${urlBase}/${repoName}`)
  const response = yield blob.json()
  const { message } = response
  if (message)
    return yield put(getRepoFail())
  const { id, full_name, subscribers_count, stargazers_count, forks_count } = response
  return yield put(getRepoSuccess({
    id,
    full_name,
    watchers: subscribers_count,
    stars: stargazers_count,
    forks: forks_count
  }))
}