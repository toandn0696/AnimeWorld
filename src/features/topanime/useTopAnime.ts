import {useTopAnimeAPI} from '../../data/hook/TopAnime';
import {TopAnime} from '../../data/model/TopAnime';

export const useTopAnime = () => {
  const topAnime = useTopAnimeAPI();
  const getTopAnime = (page?: number) => {
    topAnime.mutate(page);
  };
  return {
    isLoading: topAnime.isLoading,
    getTopAnime,
    data: topAnime.data as unknown as TopAnime,
  };
};
