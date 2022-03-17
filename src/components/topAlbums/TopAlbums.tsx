import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTopAlbumsData, selectTopAlbums, selectTopAlbumsStatus } from './top-albums-slice';
import Album from '../../models/albums';
import List from 'src/elements/text/List';
import Li from 'src/elements/text/Li';
import HeadingPrimary from 'src/elements/headings/HeadingPrimary';
import AlbumCard from '../cards/AlbumCard';
import WrapperV from 'src/elements/layout/WrapperV';
import { Skeleton } from '@chakra-ui/react';

const TopAlbums = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchTopAlbumsData());
	}, [dispatch]);

	const notification = useAppSelector(selectTopAlbumsStatus);
	const top = useAppSelector(selectTopAlbums);

	const displayTopAlbums = top.map(({ id, name, thumbnail, artist, artistId }: Album) => (
		<Li key={id}>
			<AlbumCard id={id} name={name} thumbnail={thumbnail} artist={artist} artistId={artistId} />
		</Li>
	));

	return (
		<WrapperV>
			<Skeleton isLoaded={notification === 'idle'}>
				<HeadingPrimary>Top Albums</HeadingPrimary>
				<List>{displayTopAlbums}</List>
			</Skeleton>
		</WrapperV>
	);
};

export default TopAlbums;

// if (notification === 'idle') {
// 	return (
// 		<WrapperV>
// 			<HeadingPrimary>Top Albums</HeadingPrimary>
// 			<List>{displayTopAlbums}</List>
// 		</WrapperV>
// 	);
// } else {
// 	return <p>{notification} top albums</p>;
// }
