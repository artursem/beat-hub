import { ChangeEvent, FC, useEffect, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector, useDebounce } from 'src/store/hooks';
import { useOnClickOutside } from 'usehooks-ts';
import {
	fetchDataAndThumbnails,
	selectSearchStatus,
	setListIsOpen,
	selectListStatus,
} from 'src/store/search/search-slice';
import DisplayList from './DisplayList';

import SearchInput from 'src/sections/app/musicSearch/SearchInput';

const SearchBox: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useAppDispatch();
	const notification = useAppSelector(selectSearchStatus);
	const showResultList = useAppSelector(selectListStatus);
	const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);
	const ref = useRef(null);
	const handleClickOutside = () => {
		dispatch(setListIsOpen(false));
	};
	useOnClickOutside(ref, handleClickOutside);

	useEffect(() => {
		if (debouncedSearchTerm && searchTerm.length > 0) {
			dispatch(setListIsOpen(true));
			dispatch(fetchDataAndThumbnails(searchTerm));
		}
	}, [dispatch, searchTerm, debouncedSearchTerm]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleFocus = () => {
		if (debouncedSearchTerm.length > 0) {
			dispatch(setListIsOpen(true));
		}
	};

	let displayList;
	if (!showResultList) displayList = null;
	if (showResultList && searchTerm.length > 0 && notification === 'idle') {
		displayList = <DisplayList />;
	}
	if (notification === 'failed') {
		displayList = <p>search failed</p>;
	}
	return (
		<div ref={ref}>
			<SearchInput
				inputval={searchTerm}
				placeholder='Find artist...'
				onChange={handleChange}
				onFocus={handleFocus}
				label='Search'
				loading={notification === 'loading' ? 'true' : 'false'} // Warning: Received `false` for a non-boolean attribute `loading`.
			/>
			{displayList}
		</div>
	);
};

export default SearchBox;
