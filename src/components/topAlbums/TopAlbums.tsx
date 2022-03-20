import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTopAlbumsData, selectTopAlbums } from './top-albums-slice';
import Album from '../../models/albums';
import List from 'src/elements/text/List';
import Li from 'src/elements/text/Li';
import HeadingPrimary from 'src/elements/headings/HeadingPrimary';
import AlbumCard from '../cards/AlbumCard';

const TopAlbums = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchTopAlbumsData());
	}, [dispatch]);

	const top = useAppSelector(selectTopAlbums);

	const displayTopAlbums = top.map(({ id, name, thumbnail, artist, artistId }: Album) => (
		<Li key={id}>
			<AlbumCard id={id} name={name} thumbnail={thumbnail} artist={artist} artistId={artistId} />
		</Li>
	));

	return (
		<>
			<HeadingPrimary>Top Albums</HeadingPrimary>
			<List>{displayTopAlbums}</List>
		</>
	);
};

export default TopAlbums;
