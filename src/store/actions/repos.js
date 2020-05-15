import {
  GET_REPO, GET_REPO_START, GET_REPO_SUCCESS, GET_REPO_FAIL, SORT_REPOS, REMOVE_REPO, CHANGE_REPO_NAME, 
  CLEAR_REPO_NAME, CLEAR_REPO_ADDITION
} from './action-types'

export const getRepo = repoName => ({ type: GET_REPO, repoName })
export const getRepoStart = () => ({ type: GET_REPO_START })
export const getRepoSuccess = repo => ({ type: GET_REPO_SUCCESS, repo })
export const getRepoFail = () => ({ type: GET_REPO_FAIL })
export const sortRepos = unsortedRepos => ({ type: SORT_REPOS, unsortedRepos })
export const removeRepo = repoName => ({ type: REMOVE_REPO, repoName })
export const changeRepoName = repoNameValue => ({ type: CHANGE_REPO_NAME, repoNameValue })
export const clearRepoName = () => ({ type: CLEAR_REPO_NAME })
export const clearRepoAddition = () => ({ type: CLEAR_REPO_ADDITION })