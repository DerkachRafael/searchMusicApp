import { StateSchema } from 'app/providers/StoreProvider';

export const getStationsData = (state: StateSchema) => state.stations.data;
