import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
	fetchAlbumsData,
	selectAlbums,
	selectAlbumsStatus,
	selectArtist,
} from 'src/store/artist/artist-slice';
import AlbumCard from 'src/sections/app/AlbumCard';
import SkeletonAlbums from './SkeletonAlbums';

import HeadingSecondary from 'src/components/headings/HeadingSecondary';
import List from 'src/components/text/List';
import Li from 'src/components/text/Li';

const DisplayAlbums = () => {
	const { id } = useAppSelector(selectArtist);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchAlbumsData(id));
	}, [dispatch, id]);

	const notification = useAppSelector(selectAlbumsStatus);

	const albums = useAppSelector(selectAlbums);

	const albumsLi = albums
		? albums.map(({ id, name, thumbnail }) => (
				<Li key={id}>
					<AlbumCard name={name} thumbnail={thumbnail} />
				</Li>
		  ))
		: null;

	let displayAlbums = <SkeletonAlbums length={albums?.length || 5} />;
	if (albums && notification === 'idle') {
		displayAlbums = <List>{albumsLi}</List>;
	}
	if (albums && albums.length === 0 && notification === 'idle') {
		displayAlbums = <SkeletonAlbums length={albums?.length || 5} />;
	}
	if (notification === 'failed') {
		displayAlbums = <p>Error loading albums</p>;
	}

	return (
		<>
			<HeadingSecondary>Top albums:</HeadingSecondary>
			{displayAlbums}
		</>
	);
};
export default DisplayAlbums;
