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
  
  export type Status = "Canceled/Ended" | "Ended" | "Running" | "New Series" | "To Be Determined";