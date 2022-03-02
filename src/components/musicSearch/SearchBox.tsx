import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDebounce } from '../../store/hooks';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { searchActions } from '../../store/search-slice';
import { searchArtist } from '../../store/searchArtist';
import OptionItem from './OptionItem';

const SearchBox: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useAppDispatch();
	const searchList = useAppSelector((state) => state.search.searchResult);
	const resultList = useAppSelector((state) => state.uiStatus.list);
	const notification = useAppSelector((state) => state.uiStatus.statusSearch);
	const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);

	useEffect(() => {
		if (debouncedSearchTerm) {
			dispatch(searchArtist(searchTerm));
		} else {
			dispatch(searchActions.setSearch(''));
		}
	}, [debouncedSearchTerm]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const showArtist = searchList.map(({ name, id, thumbnail }) => {
		return <OptionItem key={id} id={id} name={name} thumbnail={thumbnail} />;
	});
	return (
		<div>
			<input
				type='search'
				value={searchTerm}
				onChange={handleChange}
				list='artists'
			/>
			{resultList ? <ul>{showArtist}</ul> : <p>{notification} search list</p>}
		</div>
	);
};

export default SearchBox;
