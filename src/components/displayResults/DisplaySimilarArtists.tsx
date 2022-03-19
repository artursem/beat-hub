import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	fetchSimilarData,
	selectArtistStatus,
	selectSimilar,
	selectSimilarStatus,
} from './artist-slice';
import ArtistCard from 'src/components/cards/ArtistCard';
import HeadingSecondary from '../../elements/headings/HeadingSecondary';
import List from 'src/elements/text/List';
import Li from 'src/elements/text/Li';
import SkeletonSimilar from './SkeletonSimilar';

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

	let displaySimilar = <SkeletonSimilar />;
	if (similar && notification === 'idle') {
		displaySimilar = <List>{similarLi}</List>;
	}
	if (notificationArtist === 'loading' || notification === 'loading') {
		displaySimilar = <SkeletonSimilar />;
	}
	if (notification === 'failed') {
		displaySimilar = <p>Error loading similar artists</p>;
	}
	return (
		<>
			<HeadingSecondary>Similar artists:</HeadingSecondary>
			{displaySimilar}
		</>
	);
};

export default SimilarArtists;
