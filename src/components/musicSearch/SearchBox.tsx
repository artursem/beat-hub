import { ChangeEvent, FC, useEffect, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector, useDebounce } from '../../store/hooks';
import { useOnClickOutside } from 'usehooks-ts';
import {
	fetchSearch,
	selectSearchResult,
	selectSearchStatus,
	setListIsOpen,
	selectListStatus,
} from './search-slice';
import OptionItem from './OptionItem';
import DisplayList from './DisplayList';
import SearchInput from 'src/elements/Input/SearchInput';
import SpinnerSmall from 'src/elements/animations/SpinnerSmall';
import { InputRightElement } from '@chakra-ui/react';

const SearchBox: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useAppDispatch();
	const searchList = useAppSelector(selectSearchResult);
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
	}, [debouncedSearchTerm]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const showArtist = searchList.map(({ name, id, thumbnail }) => {
		return <OptionItem key={id} id={id} name={name} thumbnail={thumbnail} />;
	});

	let displayList;
	if (!showResultList) displayList = null;
	if (showResultList && notification === 'idle') {
		displayList = <DisplayList />;
	}
	if (notification !== 'idle') {
		displayList = <p>{notification} search list</p>;
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
