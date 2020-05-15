import { CHANGE_REPO_NAME, CLEAR_REPO_NAME } from '../actions/action-types'

const initState = {
  repoNameValue: ''
}

export default (state = initState, { type, repoNameValue }) => {
  switch (type) {
    case CHANGE_REPO_NAME:
      return { repoNameValue }
    case CLEAR_REPO_NAME:
      return { repoNameValue: '' }
    default:
      return state
  }
}