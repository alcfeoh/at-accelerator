export interface SearchResponse {
  total:    string;
  page:     number;
  pages:    number;
  tv_shows: TvShow[];
}

export interface TvShow {
  id:                   number;
  name:                 string;
  permalink:            string;
  start_date:           string;
  end_date:             null | string;
  country:              string;
  network:              string;
  status:               Status;
  image_thumbnail_path: string;
}

export interface TvShowDetails extends TvShow{
  url:                  string;
  description:          string;
  description_source:   string;
  runtime:              number;
  youtube_link:         null;
  image_path:           string;
  rating:               string;
  rating_count:         string;
  countdown:            null | Episode;
  genres:               string[];
  pictures:             string[];
  episodes:             Episode[];
}

export interface Episode {
  season:   number;
  episode:  number;
  name:     string;
  air_date: Date;
}

export type Status = "Canceled/Ended" | "Ended" | "Running" | "New Series" | "To Be Determined";

export type TvShowId = TvShow["id"]; // This is better than number
export type TvShowIds = Array<TvShow["id"]>; // This is easier to read
