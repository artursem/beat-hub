import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchArtist } from '../../store/fetchArtist';
import {
	addArtist,
	removeArtist,
	selectLibraryList,
} from '../../store/library-slice';

type DisplayArtistProps = {
	artistId: string;
};

const DisplayArtist = ({ artistId }: DisplayArtistProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchArtist(artistId));
	}, [dispatch, artistId]);

	const { id, name, bio, genres, image } = useAppSelector(
		(state) => state.search.displayArtist
	);
	const library = useAppSelector(selectLibraryList);
	const isInLibrary = (id: string) => {
		return library.indexOf(id) >= 0;
	};

	const notification = useAppSelector((state) => state.uiStatus.statusArtist);

	const handleAddToLibrary = () => {
		dispatch(addArtist(artistId));
	};
	const handleRemoveFromLibrary = () => {
		dispatch(removeArtist(id));
	};

	const libraryButton = isInLibrary(id) ? (
		<button onClick={handleRemoveFromLibrary}>Remove</button>
	) : (
		<button onClick={handleAddToLibrary}>Add</button>
	);

	const artistData = (
		<section>
			<h1>{name}</h1>
			<h4>artist: {id}</h4>
			{image && <img src={image} alt={id} />}
			<p>{libraryButton}</p>
			<ul>{genres && genres.map((gen) => <li key={gen}>{gen} </li>)}</ul>
			<p>{bio}</p>
		</section>
	);

	return notification === 'idle' ? artistData : <p>{notification} artist</p>;
};

export default DisplayArtist;
