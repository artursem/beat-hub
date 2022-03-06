import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector, useDebounce } from '../../store/hooks';
import {
	fetchSearch,
	selectSearchResult,
	selectSearchStatus,
	setListIsOpen,
	selectListStatus,
} from './search-slice';
import OptionItem from './OptionItem';

const SearchBox: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useAppDispatch();
	const searchList = useAppSelector(selectSearchResult);
	const notification = useAppSelector(selectSearchStatus);
	const showResultList = useAppSelector(selectListStatus);
	const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);

	useEffect(() => {
		if (debouncedSearchTerm) {
			dispatch(setListIsOpen(true));
			dispatch(fetchSearch(searchTerm));
		}
	}, [debouncedSearchTerm]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const showArtist = searchList.map(({ name, id, thumbnail }) => {
		return <OptionItem key={id} id={id} name={name} thumbnail={thumbnail} />;
	});

	let displayList;
	if (showResultList && notification === 'idle') {
		// show list ?
		displayList = <ul>{showArtist}</ul>;
	}
	if (notification !== 'idle') {
		<p>{notification} search list</p>;
	}

	return (
		<div>
			<input type='search' value={searchTerm} onChange={handleChange} list='artists' />
			{displayList}
		</div>
	);
};

export default SearchBox;
