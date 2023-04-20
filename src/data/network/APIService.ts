import {NewReleaseAnime} from '../model/NewReleaseAnime';
import {TopAnime} from '../model/TopAnime';
import APIClient from './Axios';

export const APIService = {
  getTopAnime: (page?: number) => {
    return APIClient.get<TopAnime>('top-airing', {params: page});
  },
  getNewRelease: (page?: number) => {
    return APIClient.get<NewReleaseAnime>('recent-episodes', {params: page});
  },
};
