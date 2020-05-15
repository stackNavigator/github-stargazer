import { GET_REPO_START, GET_REPO_FAIL, GET_REPO_SUCCESS, CLEAR_REPO_ADDITION } from '../actions/action-types'

const initState = {
  loading: false,
  error: false,
  repoWasAdded: false,
  repos: [],
  visitedRepos: []
}

export default (state = initState, { type, ...payload }) => {
  switch (type) {
    case CLEAR_REPO_ADDITION:
      return { ...state, repoWasAdded: false, loading: false }
    case GET_REPO_START:
      return { ...state, error: false, loading: true }
    case GET_REPO_FAIL:
      return { ...state, error: true, loading: false }
    case GET_REPO_SUCCESS:
      const { repo } = payload
      const { repos } = state
      const repoExists = repos.some(({ id }) => id === repo.id)
      return { ...state, repos: !repoExists ? [...repos, repo] : repos, repoWasAdded: true }
    default:
      return state
  }
}