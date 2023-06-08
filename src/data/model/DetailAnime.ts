import {Epesodes} from './Epesodes';

export type DetailAnime = {
  id: string;
  title: string;
  url: string;
  genres: string[];
  totalEpisodes: number;
  image: string;
  releaseDate: string;
  description: string;
  subOrDub: string;
  type: string;
  status: string;
  otherName: 'SPYxFAMILY';
  episodes: Epesodes[];
};
