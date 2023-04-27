import {useEspisodeAnimeAPI, useTopAnimeAPI} from '../../data/hook/TopAnime';

export const useHome = () => {
  const topAnime = useTopAnimeAPI();
  const espisodeAnime = useEspisodeAnimeAPI();
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
