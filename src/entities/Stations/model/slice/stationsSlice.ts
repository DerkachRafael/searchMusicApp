import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortOrder, StationSortField } from 'features/Stations/StationFilters/StationFilters';
import { StationsSchema, Station } from '../types/stations';
import { fetchStations } from '../services/fetchStations';

const initialState: StationsSchema = {
    data: [],
    initialStations: [],
    error: null,
    sort: '',
    tag: '',
    searchQuery: '',
    isLoading: false,
};
export const stationsSlice = createSlice({
    name: 'stations',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setSort: (state, action: PayloadAction<StationSortField>) => {
            state.sort = action.payload;
            state.data = state.data
                .sort((a, b) => a[action.payload] - b[action.payload]);
        },
        setFilterByTag: (state, action: PayloadAction<string>) => {
            state.tag = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            const sort = state.sort as StationSortField;
            state.data = state.data
                // eslint-disable-next-line array-callback-return,consistent-return
                .sort((a, b) => {
                    if (sort) {
                        return action.payload === 'asc' ? a[sort] - b[sort]
                            : b[sort] - a[sort];
                    }
                });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStations.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchStations.fulfilled, (
                state,
                action: PayloadAction<Station[]>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
                state.initialStations = action.payload;
            })
            .addCase(fetchStations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: stationsActions } = stationsSlice;
export const { reducer: stationsReducer } = stationsSlice;
