import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from 'reselect';
import { getStationsSort } from 'entities/Stations/model/selectors/getStationsSort';
import { useSelector } from 'react-redux';
import { getTagStationsMap } from 'entities/Stations/model/selectors/getTagStationsMap';
import { getStationsData } from './getStationsData';
import { getStationsSearchQuery } from './getStationsSearchQuery';

export const getFilteredData = createSelector(
    [getStationsData, getStationsSearchQuery, getTagStationsMap, (state) => state.stations.tag],
    (data, searchQuery, tagMap, tag) => {
        if (searchQuery) {
            return data.filter(
                (product) => product.name.toLowerCase().includes(searchQuery),
            );
        }
        if (tag) {
            return tagMap.get(tag) || data;
        }
        return data;
    },
);
