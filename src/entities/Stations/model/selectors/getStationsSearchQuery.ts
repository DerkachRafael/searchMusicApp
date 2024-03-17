import { StateSchema } from 'app/providers/StoreProvider';

export const getStationsSearchQuery = (state: StateSchema) => state.stations.searchQuery;
