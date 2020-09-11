import {observable, computed, action, flow, decorate} from 'mobx';

import {urlBase} from './public-urls';

export interface IStore {
  repoName: string;
  repoWasAdded: boolean;
  error: boolean;
  loading: boolean;
  repos: any[];
  languages: any;
  stats: any;
  sortedRepos: any[];
  changeRepoName: (value: string) => void;
  clearRepoName: () => void;
  clearRepoAddition: () => void;
  removeRepo: (repoName: string) => void;
  localizeRepoStats: (repoName: string) => void;
  getRepo: (repoName: string) => void;
  getRepoLanguages: (repoName: string) => void;
}

class Store implements IStore {
  repoName = '';
  repoWasAdded = false;
  error = false;
  loading = false;
  repos = [];
  languages = {};
  stats = {};

  get sortedRepos() {
    return [...this.repos].sort((a, b) => b.stars - a.stars);
  }

  changeRepoName(value: string) {
    this.repoName = value;
  }

  clearRepoName() {
    this.repoName = '';
  }

  clearRepoAddition() {
    this.repoWasAdded = false;
    this.loading = false;
  }

  removeRepo(repoName: string) {
    const indexToDelete = this.repos.findIndex(
      ({full_name}) => full_name === repoName,
    );
    this.repos.splice(indexToDelete, 1);
  }

  localizeRepoStats(repoName: string) {
    const repo = this.repos.find(({full_name}) => full_name === repoName);
    const {id, full_name, ...stats} = repo;
    this.stats = Object.entries(stats).reduce(
      (acc, [key, value]: [string, string]) => ({
        ...acc,
        [key]: parseInt(value, 10).toLocaleString(),
      }),
      {},
    );
  }

  getRepo = flow(function*(repoName: string) {
    this.error = false;
    this.loading = true;
    const blob = yield fetch(`${urlBase}/${repoName}`);
    const response = yield blob.json();
    const {message} = response;
    if (message) {
      this.error = true;
      this.loading = false;
      return;
    }
    const {
      id,
      full_name,
      subscribers_count,
      stargazers_count,
      forks_count,
    } = response;

    const repo = {
      id,
      full_name,
      watchers: subscribers_count,
      stars: stargazers_count,
      forks: forks_count,
    };
    const repoExists = this.repos.some(
      ({id: currentId}) => currentId === repo.id,
    );
    if (!repoExists) {
      this.repos.push(repo);
    }
    this.repoWasAdded = true;
  });

  getRepoLanguages = flow(function*(repoName: string) {
    this.error = false;
    this.loading = true;
    const blob = yield fetch(`${urlBase}/${repoName}/languages`);
    const response = yield blob.json();
    const {message} = response;
    if (message) {
      this.error = true;
      this.loading = false;
      return;
    }
    const totalBytes =
      Object.values(response).reduce<number>((acc: number, value: number) => acc + +value, 0);
    const percentedLanguages = Object.entries(response).reduce(
      (acc, [key, value]: [string, number]) => ({
        ...acc,
        [key]: `${((value / totalBytes) * 100).toFixed(1).replace('.', ',')}%`,
      }),
      {},
    );
    this.languages = {[repoName]: percentedLanguages};
    this.loading = false;
  });
}

decorate(Store, {
  repoName: observable,
  repoWasAdded: observable,
  error: observable,
  loading: observable,
  repos: observable,
  languages: observable,
  stats: observable,
  sortedRepos: computed,
  changeRepoName: action,
  clearRepoName: action,
  clearRepoAddition: action,
  removeRepo: action,
  localizeRepoStats: action,
  getRepo: action,
  getRepoLanguages: action,
});

export default new Store();
