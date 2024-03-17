import { AxiosInstance } from 'axios';
import { StationsSchema } from 'entities/Stations';

export interface StateSchema {
    stations: StationsSchema;
}
export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
