import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDebounce } from '../../store/useDebounce';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { searchActions } from '../../store/search-slice';
import { searchArtist } from '../../store/search-actions';
import OptionItem from './OptionItem';

const SearchBox: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useAppDispatch();
	const searchList = useAppSelector((state) => state.search.searchResult);
	const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);

	useEffect(() => {
		if (debouncedSearchTerm) {
			dispatch(searchArtist(searchTerm));
			console.log(searchList);
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
		</div>
	);
};

export default SearchBox;
