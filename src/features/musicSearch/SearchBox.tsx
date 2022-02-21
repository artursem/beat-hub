import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDebounce } from '../../store/useDebounce';
import { useAppDispatch } from '../../store/hooks';
import { searchActions } from '../../store/search-slice';
import { fetchSearchArtist } from '../../store/search-actions';

const SearchBox: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useAppDispatch();
	const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);

	useEffect(() => {
		if (debouncedSearchTerm) {
			dispatch(fetchSearchArtist(searchTerm));
		} else {
			dispatch(searchActions.setSearch(''));
		}
	}, [debouncedSearchTerm]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return (
		<>
			<input type='search' value={searchTerm} onChange={handleChange} />
		</>
	);
};

export default SearchBox;
