import { createSelector } from 'reselect';
import { getStationsData, Station } from 'entities/Stations';

export const getTagStationsMap = createSelector(
    [getStationsData],
    (data) => {
        const tagMap = new Map<string, Station[]>();

        // eslint-disable-next-line no-restricted-syntax
        for (const item of data) {
            // eslint-disable-next-line no-restricted-syntax
            for (const tag of item.tags) {
                if (!tagMap.has(tag)) {
                    tagMap.set(tag, [item]);
                } else {
                    tagMap.get(tag).push(item);
                }
            }
        }

        return tagMap;
    },
);
