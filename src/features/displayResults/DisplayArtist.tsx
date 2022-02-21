import FoundArtist from '../../models/foundArtist';
import { useAppSelector } from '../../store/hooks';

const DisplayArtist = () => {
	const notification = useAppSelector((state) => state.uiStatus.notification);
	const showArtist = useAppSelector((state) => state.search.searchResult);

	// WTF????
	const { id, name, image, bio, genre, country }: FoundArtist = showArtist;

	const displayArtistInfo = id ? (
		<>
			<h1>{name}</h1>
			<img src={image} alt={id} width='300' />
			<h4>{genre}</h4>
			<h5>{country}</h5>
			<p>{bio}</p>
		</>
	) : (
		<p>search for artist or a band</p>
	);

	return (
		<>
			<div>{notification}</div>
			<hr />
			<div>{displayArtistInfo}</div>
		</>
	);
};

export default DisplayArtist;
