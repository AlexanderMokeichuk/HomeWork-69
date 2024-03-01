export interface ApiShow {
    averageRuntime: number,
    dvdCountry: null | {
      code: string,
      name: string,
      timezone: string,
    },
    ended: string | null,
    externals: {
      imdb: string,
      thetvdb: number,
      tvrage: null | number,
    },
    genres: string[],
    id: number,
    image: {
      medium: string,
      original: string,
    },
    language: string,
    name: string,
    network: null | {
      country: {
        code: string,
        name: string,
        timeZone: string,
      },
      id: number,
      name: string,
      officialSite: string,
    },
    officialSite: string,
    premiered: string,
    rating: {
      average: number
    },
    runtime: number,
    schedule: {
      days: string[],
      time: string,
    },
    status: string,
    summary: string,
    type: string,
    updated: number,
    url: string,
    webChannel: null | string,
    weight: number,
    _links: {
      previousepisode: {
        href: string
      },
      self: {
        href: string,
      }
    },
}
export interface ApiShows{
  score: number,
  show: ApiShow,
}

export interface ShowInAutocomplete {
  id: number,
  name: string,
}

export interface NotFoundShow {
  code: number,
  message: string,
  name: string,
  status: number,
}

export interface Show {
  name: string,
  image: {
    medium: string,
    original: string,
  }
  summary: string;
  url: string
}