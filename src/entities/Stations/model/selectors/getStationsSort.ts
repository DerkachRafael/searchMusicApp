import { StateSchema } from 'app/providers/StoreProvider';

export const getStationsSort = (state: StateSchema) => state.stations.sort;
