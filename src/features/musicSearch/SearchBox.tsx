import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { useDebounce } from '../../store/useDebounce';
import { useAppDispatch } from '../../store/hooks';
import { searchActions } from '../../store/search-slice';

const SearchBox: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useAppDispatch();
	const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);

	useEffect(() => {
		if (debouncedSearchTerm) {
			// setIsSearching
			dispatch(searchActions.setSearch(searchTerm));
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
			{/* <button type='submit'>OK</button> */}
		</>
	);
};

export default SearchBox;
