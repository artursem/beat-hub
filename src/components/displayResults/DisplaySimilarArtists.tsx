import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	fetchSimilarData,
	selectSimilar,
	selectSimilarStatus,
	selectArtistStatus,
} from './artist-slice';
import ArtistCard from 'src/elements/cards/ArtistCard';
import HeadingSecondary from '../../elements/headings/HeadingSecondary';

type SimilarArtistsProps = {
	list: string[];
};
const SimilarArtists = ({ list }: SimilarArtistsProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchSimilarData(list));
	}, [dispatch, list]);

	const notification = useAppSelector(selectSimilarStatus);
	const notificationArtist = useAppSelector(selectArtistStatus);
	const similar = useAppSelector(selectSimilar);

	const similarLi = similar
		? similar.map(({ id, name, thumbnail }) => (
				<ArtistCard key={id} id={id} name={name} thumbnail={thumbnail} />
		  ))
		: null;
	const displaySimilar =
		similar && notificationArtist === 'idle' ? (
			<>
				<HeadingSecondary>Similar artists:</HeadingSecondary>
				<ul>{similarLi}</ul>
			</>
		) : null;

	return notification === 'idle' ? displaySimilar : <p>{notification} similar artist</p>;
};

export default SimilarArtists;
