import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchSimilar } from '../../store/fetchSimilar';
import ListArtists from '../../models/listArtists';
type SimilarArtistsProps = {
	list: string[];
};
const SimilarArtists = ({ list }: SimilarArtistsProps) => {
	const dispatchSimilar = useAppDispatch();
	// useEffect(() => {
	// 	dispatchSimilar(fetchSimilar(list));
	// }, [dispatchSimilar, list]);

	// const similar = useAppSelector((state) => state.search.similarArtist);
	const notification = useAppSelector((state) => state.uiStatus.notification);

	const displayList = list.map((artist) => <li key={artist}>{artist}</li>);
	return (
		<>
			<h3>Similar artists</h3>
			<p>{notification}</p>
			<ul>{displayList}</ul>
		</>
	);
};

export default SimilarArtists;
