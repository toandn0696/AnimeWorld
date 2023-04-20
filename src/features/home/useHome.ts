import {useTopAnime} from '../../data/hook/TopAnime';

export const useHome = () => {
  const topAnime = useTopAnime();
  const getTopAnime = () => {
    topAnime.mutate();
  };
  return {
    isLoading: topAnime.isLoading,
    getTopAnime,
    data: topAnime.data,
  };
};
