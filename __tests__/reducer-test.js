import { GET_REPO_SUCCESS, SORT_REPOS, GET_REPO_LANGUAGES_SUCCESS } from '../src/store/actions/action-types'
import repoReducer from '../src/store/reducers/repo'

describe('repo reducer behaves predictably', () => {
  const store = {
    repos: [
      {
        id: '1',
        stars: '10082'
      },
      {
        id: '2',
        stars: '42'
      },
      {
        id: '3',
        stars: '2345'
      }
    ]
  }
  test('should NOT add a duplicate record to repos array', () => {
    const newState = repoReducer(store, { type: GET_REPO_SUCCESS, repo: { id: '2', stars: '42' } })
    expect(newState.repos)
      .toEqual([{ id: '1', stars: '10082' }, { id: '2', stars: '42' }, { id: '3', stars: '2345' }])
  })
  test('should sort repo by stars in descending order', () => {
    const newState = repoReducer(store, { type: SORT_REPOS, unsortedRepos: store.repos })
    expect(newState.repos)
      .toEqual([{ id: '1', stars: '10082' }, { id: '3', stars: '2345' }, { id: '2', stars: '42' }])
  })
  test('should convert bytes to percentages on repo languages', () => {
    const languages = { JavaScript: '99487', CSS: '10308', HTML: '1594' }
    const newState = repoReducer(store, {
      type: GET_REPO_LANGUAGES_SUCCESS,
      targetName: 'MyRepo',
      languages
    })
    expect(newState.languages).toEqual({
      MyRepo: {
        JavaScript: '89,3%',
        CSS: '9,3%',
        HTML: '1,4%'
      }
    })
  })
})