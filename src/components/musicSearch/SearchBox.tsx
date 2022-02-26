import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDebounce } from '../../store/useDebounce';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { searchActions } from '../../store/search-slice';
import { searchArtist } from '../../store/searchArtist';
import OptionItem from './OptionItem';

const SearchBox: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useAppDispatch();
	const searchList = useAppSelector((state) => state.search.searchResult);
	const notification = useAppSelector((state) => state.uiStatus.notification);
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

	const showArtist = searchList.map(({ name, id }) => {
		return <OptionItem key={id} id={id} name={name} />;
	});

	return (
		<div>
			<input
				type='search'
				value={searchTerm}
				onChange={handleChange}
				list='artists'
			/>
			{searchList && <ul>{showArtist}</ul>}
			<p>{notification}</p>
		</div>
	);
};

export default SearchBox;