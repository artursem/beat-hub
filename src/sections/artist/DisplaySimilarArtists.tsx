import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
	fetchSimilarData,
	selectArtist,
	selectArtistStatus,
	selectSimilar,
	selectSimilarStatus,
} from 'src/store/artist/artist-slice';
import SkeletonSimilar from './SkeletonSimilar';
import ArtistCard from 'src/sections/app/ArtistCard';

import HeadingSecondary from 'src/components/headings/HeadingSecondary';
import List from 'src/components/text/List';
import Li from 'src/components/text/Li';

const SimilarArtists = () => {
	const { id, contemposLink } = useAppSelector(selectArtist);

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchSimilarData(id));
	}, [dispatch, id]);

	const notification = useAppSelector(selectSimilarStatus);
	const notificationArtist = useAppSelector(selectArtistStatus);
	const similar = useAppSelector(selectSimilar);

	if (!contemposLink) {
		return null;
	}

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
