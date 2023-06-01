import {useMutation} from 'react-query';
import {APIService} from '../network/APIService';

export const useTopAnimeAPI = () => {
  return useMutation((page?: number) => {
    return APIService.getTopAnime(page);
  });
};

export const useEspisodeAnimeAPI = () => {
  return useMutation(() => {
    return APIService.getNewRelease();
  });
};
