export type NewReleaseAnime = {
  currentPage: number;
  hasNextPage: boolean;
  results: ResponseNewReleaseAnime[];
};

type ResponseNewReleaseAnime = {
  id: string;
  episodeId: string;
  episodeNumber: number;
  title: string;
  image: string;
  url: string;
};
