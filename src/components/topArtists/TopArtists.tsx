import { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTopData, selectTop, selectTopStatus } from './top-slice';
import List from 'src/elements/text/List';
import Li from 'src/elements/text/Li';
import ArtistCard from '../cards/ArtistCard';
import HeadingPrimary from 'src/elements/headings/HeadingPrimary';

import ListArtists from '../../models/listArtists';

const TopArtists = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchTopData());
	}, [dispatch]);

	const notification = useAppSelector(selectTopStatus);
	const top = useAppSelector(selectTop);

	const displayTopArtists = top.map(({ id, name, thumbnail }: ListArtists) => (
		<Li key={id}>
			<ArtistCard id={id} name={name} thumbnail={thumbnail} />
		</Li>
	));
	if (notification === 'idle') {
		return (
			<>
				<HeadingPrimary>Top Artists</HeadingPrimary>
				<List>{displayTopArtists}</List>
			</>
		);
	} else {
		return <p>{notification} top artists</p>;
	}
};

export default TopArtists;
