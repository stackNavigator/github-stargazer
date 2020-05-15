import {
  GET_REPO_START, GET_REPO_FAIL, GET_REPO_SUCCESS, CLEAR_REPO_ADDITION, SORT_REPOS, REMOVE_REPO,
  GET_REPO_LANGUAGES_SUCCESS
} from '../actions/action-types'

const initState = {
  loading: false,
  error: false,
  repoWasAdded: false,
  repos: [],
  languages: {}
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
      const repoExists = state.repos.some(({ id }) => id === repo.id)
      return { ...state, repos: !repoExists ? [...state.repos, repo] : state.repos, repoWasAdded: true }
    case GET_REPO_LANGUAGES_SUCCESS:
      const { targetName, languages } = payload
      const totalBytes = Object.values(languages).reduce((acc, value) => acc + +value, 0)
      const percentedLanguages = Object.entries(languages).reduce((acc, [key, value]) => ({
        ...acc,
        [key]: `${(value / totalBytes * 100).toFixed(1).replace('.', ',')}%`
      }), {})
      return { ...state, languages: { [targetName]: percentedLanguages }, loading: false }
    case REMOVE_REPO:
      const { repoName } = payload
      const filteredRepos = state.repos.filter(({ full_name }) => full_name !== repoName)
      return { ...state, repos: filteredRepos }
    case SORT_REPOS:
      const { unsortedRepos } = payload
      const sortedRepos = unsortedRepos.sort((a, b) => b.stars - a.stars)
      return { ...state, repos: sortedRepos }
    default:
      return state
  }
}