import cls from './StationSearch.module.scss';

type StationSearchTypes = {
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const StationSearch = ({ onSearch }: StationSearchTypes) => {
    return (
        <input className={cls.StationSearch} type="text" placeholder="Search by name" onChange={onSearch} />
    );
};
