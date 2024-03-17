import {
    createAsyncThunk, configureStore, ThunkAction, Action,
} from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Station } from '../types/stations';

export const fetchStations = createAsyncThunk<Station[],
    void,
    ThunkConfig<string>>(
        'stations/fetchStations',
        async (_, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;
            try {
                const response = await extra.api.get('https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json');

                if (!response.data) {
                    throw new Error();
                }

                return response.data?.data as Station[];
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
