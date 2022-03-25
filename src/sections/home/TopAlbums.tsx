import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { fetchTopAlbumsData, selectTopAlbums } from 'src/store/top-albums/top-albums-slice';
import { Album } from 'src/types/app-types';
import AlbumCard from 'src/sections/app/AlbumCard';

import List from 'src/components/text/List';
import Li from 'src/components/text/Li';
import HeadingPrimary from 'src/components/headings/HeadingPrimary';

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
