import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDebounce } from '../../store/useDebounce';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { searchActions } from '../../store/search-slice';
import { fetchSearchArtist } from '../../store/search-actions';
import ListArtists from '../../models/listArtists';

const SearchBox: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useAppDispatch();
	const searchList = useAppSelector((state) => state.search.searchResult);
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
	console.log(searchList);
	// if (searchList) {
	// 	const showArtist = searchList.map((artist) => {
	// 		return <li key={artist.id}>{artist.name}</li>;
	// 	});
	// }

	return (
		<>
			<input type='search' value={searchTerm} onChange={handleChange} />
			{/* {searchList ? showArtist : null} */}
		</>
	);
};

export default SearchBox;
