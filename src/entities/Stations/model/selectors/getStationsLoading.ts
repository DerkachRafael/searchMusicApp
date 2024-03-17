import { StateSchema } from 'app/providers/StoreProvider';

export const getStationsLoading = (state: StateSchema) => state.stations.isLoading;
