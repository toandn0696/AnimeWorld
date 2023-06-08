import {useMutation} from 'react-query';
import {APIService} from '../network/APIService';

export const useDetailAnimeAPI = () => {
  return useMutation((id: string) => {
    return APIService.getDetailAnime(id);
  });
};
