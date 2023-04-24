import {useEspisodeAnime, useTopAnime} from '../../data/hook/TopAnime';

export const useHome = () => {
  const topAnime = useTopAnime();
  const espisodeAnime = useEspisodeAnime();
  const getTopAnime = () => {
    topAnime.mutate();
  };
  const getEspisode = () => {
    espisodeAnime.mutate();
  };
  return {
    isLoading: espisodeAnime.isLoading,
    getTopAnime,
    getEspisode,
    data: topAnime.data,
    dataEspisode: espisodeAnime.data,
  };
};
