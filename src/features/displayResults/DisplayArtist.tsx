import FoundArtist from '../../models/foundArtist';
import { useAppSelector } from '../../store/hooks';
import { useState } from 'react';

const DisplayArtist = () => {
	const notification = useAppSelector((state) => state.uiStatus.notification);
	// const showArtist = useAppSelector((state) => state.search.searchResult);
	// const { id, name, image, bio, bioShort, genre, country }: FoundArtist =
	// 	showArtist;
	const [shortBio, setShortBio] = useState(true);
	const toggleBio = () => {
		setShortBio((prevState) => !prevState);
	};

	// const displayArtistInfo = id ? (
	// 	<>
	// 		<h1>{name}</h1>
	// 		<img src={image} alt={id} width='300' />
	// 		<h4>{genre}</h4>
	// 		<h5>{country}</h5>
	// 		<p>{shortBio ? bioShort : bio}</p>
	// 		<button onClick={toggleBio}>{shortBio ? 'more' : 'less'}</button>
	// 	</>
	// ) : (
	<p>search for artist or a band</p>;
	// );

	return (
		<>
			<div>{notification}</div>
			<hr />
			{/* <div>{displayArtistInfo}</div> */}
		</>
	);
};

export default DisplayArtist;
