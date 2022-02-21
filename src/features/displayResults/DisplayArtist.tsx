import { useAppSelector } from '../../store/hooks';

const DisplayArtist = () => {
	const showArtist = useAppSelector((state) => state.search.searchArtist);
	const notification = useAppSelector((state) => state.uiStatus.notification);
	return (
		<>
			<div>{showArtist}</div>
			<hr />
			<div>{notification}</div>
		</>
	);
};

export default DisplayArtist;
