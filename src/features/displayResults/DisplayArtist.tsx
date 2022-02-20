import { RootStateOrAny, useSelector } from 'react-redux';

const DisplayArtist = () => {
	const showArtist = useSelector(
		(state: RootStateOrAny) => state.artist.searchArtist
	);
	return <div>{showArtist}</div>;
};

export default DisplayArtist;
