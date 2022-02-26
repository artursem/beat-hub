import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchArtist } from '../../store/search-actions';

type DisplayArtistProps = {
	artistId: string;
};

const DisplayArtist = ({ artistId }: DisplayArtistProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchArtist(artistId));
	}, [dispatch, artistId]);

	const { id, name, bio, contemporaries, genres, image } = useAppSelector(
		(state) => state.search.displayArtist
	);

	const notification = useAppSelector((state) => state.uiStatus.notification);

	const artistData = (
		<section>
			<h1>{name}</h1>
			<h4>artist: {id}</h4>
			<img src={image} alt={id} />
			<ul>
				{genres.map((gen) => (
					<li key={gen}>{gen} </li>
				))}
			</ul>
			<p>{bio}</p>
			<ul>
				{contemporaries.map((con) => (
					<li key={con}>{con}</li>
				))}
			</ul>
		</section>
	);

	return notification === 'idle' ? artistData : <p>{notification}</p>;
};

export default DisplayArtist;
