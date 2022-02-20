import { RootStateOrAny, useSelector } from 'react-redux';

const DisplayArtist = () => {
	const showArtist = useSelector(
		(state: RootStateOrAny) => state.search.searchArtist
	);
	const notification = useSelector(
		(state: RootStateOrAny) => state.uiStatus.notification
	);
	return (
		<>
			<div>{showArtist}</div>
			<hr />
			<div>{notification}</div>
		</>
	);
};

export default DisplayArtist;
