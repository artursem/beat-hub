import { ChangeEvent, FC, useEffect, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector, useDebounce } from 'src/store/hooks';
import { useOnClickOutside } from 'usehooks-ts';
import {
	fetchSearch,
	selectSearchStatus,
	setListIsOpen,
	selectListStatus,
} from 'src/store/search/search-slice';
import SearchInput from 'src/components/Input/SearchInput';
import DisplayList from './DisplayList';

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
		if (debouncedSearchTerm) {
			dispatch(setListIsOpen(true));
			dispatch(fetchSearch(searchTerm));
		}
	}, [dispatch, searchTerm, debouncedSearchTerm]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	let displayList;
	if (!showResultList) displayList = null;
	if (showResultList && notification === 'idle') {
		displayList = <DisplayList />;
	}
	if (notification === 'failed') {
		displayList = <p>search failed</p>;
	}

	return (
		<div ref={ref}>
			<SearchInput
				inputValue={searchTerm}
				onChange={handleChange}
				loading={notification === 'loading'}
			/>
			{displayList}
		</div>
	);
};

export default SearchBox;
