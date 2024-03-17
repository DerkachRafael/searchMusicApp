import { StateSchema } from 'app/providers/StoreProvider';

export const getStationsError = (state: StateSchema) => state.stations.error;
