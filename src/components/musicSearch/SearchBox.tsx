import { ChangeEvent, FC, useEffect, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector, useDebounce } from '../../store/hooks';
import { fetchSearch, selectSearchResult, selectSearchStatus } from '../../store/search-slice';
import OptionItem from './OptionItem';

const SearchBox: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useAppDispatch();
	const searchList = useAppSelector(selectSearchResult);
	const notification = useAppSelector(selectSearchStatus);
	// const showResultList = useAppSelector((state) => state.uiStatus.list); // ############################ FIX!
	const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);

	useEffect(() => {
		if (debouncedSearchTerm) {
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
	if (notification === 'idle') {
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
