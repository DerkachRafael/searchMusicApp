import { useCallback, useMemo } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getTagStationsMap } from 'entities/Stations/model/selectors/getTagStationsMap';

export enum StationSortField {
    POPULARITY = 'popularity',
    RELIABILITY = 'reliability',
}
export type SortOrder = 'asc' | 'desc';

type StationFiltersTypes = {
    onChangeSort: (str: StationSortField) => void,
    onChangeOrder: (str: SortOrder) => void,
    onChangeFilter: (str: string) => void,
    sort: StationSortField | string,
}

export const StationFilters = ({
    onChangeSort, onChangeOrder, sort, onChangeFilter,
}: StationFiltersTypes) => {
    const { t } = useTranslation();
    const tag = useSelector(getTagStationsMap);

    const orderOptions = useMemo(() => [
        {
            value: 'asc',
            content: t('asc'),
        },
        {
            value: 'desc',
            content: t('desc'),
        },
    ], [t]);
    const sortFieldOptions = useMemo(() => [
        {
            value: StationSortField.POPULARITY,
            content: t('Sort By popularity'),
        },
        {
            value: StationSortField.RELIABILITY,
            content: t('Sort By reliability'),
        },
    ], [t]);

    const tagOptions = useMemo(() => {
        return Array.from(tag.keys())
            .map((item) => ({
                value: item,
                content: item,
            }));
    }, [tag]);

    const changeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as StationSortField);
    }, [onChangeSort]);
    const changeOrderHandler = useCallback((newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
    }, [onChangeOrder]);
    const changeFilterHandler = useCallback((filterTag: string) => {
        onChangeFilter(filterTag);
    }, [onChangeFilter]);
    return (
        <div className="my-10">
            <div className="flex gap-10">
                <Select options={sortFieldOptions} onChange={changeSortHandler} label="Sort By" withDisabledValue />
                <Select options={orderOptions} onChange={changeOrderHandler} label="Order" readonly={!sort} />
            </div>
            <Select
                options={tagOptions}
                onChange={changeFilterHandler}
                withDefaultAllOption
                className="my-10"
                label="Filter By tags"
            />
        </div>

    );
};
