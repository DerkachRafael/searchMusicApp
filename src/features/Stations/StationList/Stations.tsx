import { useSelector } from 'react-redux';
import { Station, stationsActions } from 'entities/Stations';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import {
    Dispatch, memo, SetStateAction, useCallback, useEffect, useState,
} from 'react';
import { fetchStations } from 'entities/Stations/model/services/fetchStations';
import { StationFilters } from 'features/Stations/StationFilters';
import { StationSearch } from 'features/Stations/StationSearch';
import { SortOrder, StationSortField } from 'features/Stations/StationFilters/StationFilters';
import { getStationsSort } from 'entities/Stations/model/selectors/getStationsSort';
import { getFilteredData } from 'entities/Stations/model/selectors/getFilteredData';
import { getStationsLoading } from 'entities/Stations/model/selectors/getStationsLoading';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useDebounce } from 'shared/hooks/useDebounce/useDebounce';
import cls from './Stations.module.scss';

const StationItem = ({
    imgUrl, name, description, streamUrl, setActiveItem, activeItem,
}: Station & {
    activeItem: string;
    setActiveItem: Dispatch<SetStateAction<string>> }) => {
    const onClick = (name: string) => {
        return () => {
            setActiveItem(name);
        };
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        <li onClick={onClick(name)} className={cls.StationItem} role="button" tabIndex={0}>
            <img src={imgUrl} alt="alt" loading="lazy" />
            <h4>{name}</h4>
            {
                (activeItem === name) ? (
                    <>
                        <p>{description}</p>
                        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                        <audio
                            className={cls.audio}
                            controls
                        >
                            <source src={streamUrl} type="audio/mpeg" />
                        </audio>
                    </>
                ) : null
            }
        </li>
    );
};

export const Stations = memo(() => {
    const [activeItem, setActiveItem] = useState<string>('');
    const data = useSelector(getFilteredData);
    const sort = useSelector(getStationsSort);
    const isStationLoading = useSelector(getStationsLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchStations());
    }, [dispatch]);
    const onChangeSort = useCallback((newSort: StationSortField) => {
        dispatch(stationsActions.setSort(newSort));
    }, [dispatch]);
    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(stationsActions.setOrder(newOrder));
    }, [dispatch]);

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = e;
        dispatch(stationsActions.setFilter(value));
    };

    const onChangeFilter = useCallback((filter: string) => {
        dispatch(stationsActions.setFilterByTag(filter));
    }, [dispatch]);

    const debouncedSearch = useDebounce(onSearch, 500);
    const renderItem = () => {
        return (
            <ul className={cls.Stations}>
                {
                    data?.map((item) => (
                        <StationItem
                            key={`${item.id}-${item.name}`}
                            setActiveItem={setActiveItem}
                            activeItem={activeItem}
                            {...item}
                        />
                    ))
                }
            </ul>
        );
    };
    return (
        <div className="container">
            <StationFilters
                onChangeSort={onChangeSort}
                onChangeOrder={onChangeOrder}
                sort={sort}
                onChangeFilter={onChangeFilter}
            />
            <StationSearch onSearch={debouncedSearch} />
            {
                isStationLoading ? <Skeleton /> : renderItem()
            }
        </div>
    );
});
