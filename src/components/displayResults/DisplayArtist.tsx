import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchArtistData, selectArtist, selectArtistStatus } from './artist-slice';
import { addArtist, removeArtist, selectLibraryList } from '../library/library-slice';
import BtnRemoveFromLib from 'src/elements/buttons/BtnRemoveFromLib';
import BtnAddToLib from 'src/elements/buttons/BtnAddToLib';

type DisplayArtistProps = {
	artistId: string;
};

const DisplayArtist = ({ artistId }: DisplayArtistProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchArtistData(artistId));
	}, [dispatch, artistId]);

	const notification = useAppSelector(selectArtistStatus);
	const { id, name, bio, genres, image } = useAppSelector(selectArtist);
	const library = useAppSelector(selectLibraryList);

	const isInLibrary = (id: string) => {
		return library.indexOf(id) >= 0;
	};

	const handleAddToLibrary = () => {
		dispatch(addArtist(artistId));
	};
	const handleRemoveFromLibrary = () => {
		dispatch(removeArtist(id));
	};

	const libraryButton = isInLibrary(id) ? (
		// <button onClick={handleRemoveFromLibrary}>Remove</button>
		<BtnRemoveFromLib onClick={handleRemoveFromLibrary} />
	) : (
		// <button onClick={handleAddToLibrary}>Add</button>
		<BtnAddToLib onClick={handleAddToLibrary} />
	);

	const artistData = (
		<section>
			<h1>{name}</h1>
			<h4>artist: {id}</h4>
			{image && <img src={image} alt={id} />}
			<p>{libraryButton}</p>
			<ul>{genres && genres.map((gen) => <li key={gen}>{gen} </li>)}</ul>
			{/* <p>{bio}</p> */}
			<p dangerouslySetInnerHTML={{ __html: bio }}></p>
		</section>
	);

	return notification === 'idle' ? artistData : <p>{notification} artist</p>;
};

export default DisplayArtist;
