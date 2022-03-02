import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchArtist } from '../../store/fetchArtist';

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
	const notification = useAppSelector((state) => state.uiStatus.notification);

	const artistData = (
		<section>
			<h1>{name}</h1>
			<h4>artist: {id}</h4>
			{image && <img src={image} alt={id} />}
			<ul>{genres && genres.map((gen) => <li key={gen}>{gen} </li>)}</ul>
			<p>{bio}</p>
		</section>
	);

	return notification === 'idle' ? artistData : <p>{notification} artist</p>;
};

export default DisplayArtist;
