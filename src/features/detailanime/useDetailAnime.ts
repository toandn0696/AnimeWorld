import {useDetailAnimeAPI} from '../../data/hook/DetailAnime';

export const useDetailAnime = () => {
  const detailAnime = useDetailAnimeAPI();
  const getDetailAnime = (id: string) => {
    detailAnime.mutate(id);
  };
  return {
    isLoading: detailAnime.isLoading,
    getDetailAnime,
    data: detailAnime.data,
  };
};
