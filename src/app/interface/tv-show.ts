export interface IEpisoDateResponse {
    total: string;
    page: number;
    pages: number;
    tv_shows: ITvShow[];
}

export interface ITvShow {
    id: number;
    name: string;
    permalink: string;
    start_date: string;
    end_date: null | string;
    country: string;
    network: string;
    status: string;
    image_thumbnail_path: string;
}