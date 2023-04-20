import {useMutation} from 'react-query';
import {APIService} from '../network/APIService';

export const useTopAnime = () => {
  return useMutation(() => {
    return APIService.getTopAnime();
  });
};
