import store from '../src/store';

describe('mobx store behaves predictably', () => {
  store.repos = [
    {
      id: 1,
      stars: 10082,
    },
    {
      id: 2,
      stars: 42,
    },
    {
      id: 3,
      stars: 2345,
    },
  ];
  test('should sort repo by stars in descending order', () => {
    expect(store.sortedRepos).toEqual([
      {id: 1, stars: 10082},
      {id: 3, stars: 2345},
      {id: 2, stars: 42},
    ]);
  });
});
