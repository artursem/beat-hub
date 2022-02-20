import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { artistActions } from '../../store/artistReducer';

const SearchBox: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useDispatch();

	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
		console.log(searchTerm);
		dispatch(artistActions.setArtist(searchTerm));
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return (
		<form onSubmit={handleSearch}>
			<input type='search' value={searchTerm} onChange={handleChange} />
			<button type='submit'>OK</button>
		</form>
	);
};

export default SearchBox;
