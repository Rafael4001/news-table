export interface INewsList {
  author?: string,
  content?: string,
  description?: string,
  publishedAt?: string,
  source?: {
    id?: string,
    name?: string,
  }
  id?: string,
  name?: string,
  title?: string,
  url?: string,
  urlToImage?: string,
}

export interface INewsTileList {
  newsList?: INewsList[] ;
}