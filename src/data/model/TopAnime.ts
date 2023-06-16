export type TopAnime = {
  currentPage: number;
  hasNextPage: boolean;
  results: ResponseTopAnime[];
};

export type ResponseTopAnime = {
  id: string;
  title: string;
  image: string;
  url: string;
  genres: string[];
};
