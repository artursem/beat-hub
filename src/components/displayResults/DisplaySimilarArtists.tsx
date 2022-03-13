import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	fetchSimilarData,
	selectSimilar,
	selectSimilarStatus,
	selectArtistStatus,
} from './artist-slice';
import ArtistCard from 'src/components/cards/ArtistCard';
import HeadingSecondary from '../../elements/headings/HeadingSecondary';
import List from 'src/elements/text/List';
import Li from 'src/elements/text/Li';

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
				<Li key={id}>
					<ArtistCard id={id} name={name} thumbnail={thumbnail} />
				</Li>
		  ))
		: null;
	const displaySimilar =
		similar && notificationArtist === 'idle' ? (
			<>
				<HeadingSecondary>Similar artists:</HeadingSecondary>
				<List>{similarLi}</List>
			</>
		) : null;

	return notification === 'idle' ? displaySimilar : <p>{notification} similar artist</p>;
};

export default SimilarArtists;
