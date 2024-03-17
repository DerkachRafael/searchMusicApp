import { StationSortField } from 'features/Stations/StationFilters/StationFilters';

export interface Station {
  id: string
  description: string
  name: string
  imgUrl: string
  streamUrl: string
  reliability: number
  popularity: number
  tags: string[]
}

export interface StationsSchema {
  data: Station[];
  initialStations: Station[];
  isLoading: boolean;
  error: null | string,
  searchQuery: string,
  tag: string,
  sort: StationSortField | string,
}
